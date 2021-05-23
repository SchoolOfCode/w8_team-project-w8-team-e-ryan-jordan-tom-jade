import { mainData } from './main.js';
import { gameOver } from './gameOver.js';
import { buildMultipleAnswers } from './buildMultipleAnswers.js';
import { startTimer } from './startTimer.js';
import { incrementRoundsPlayedCounter } from './incrementRoundsPlayedCounter.js';
import { createNewElement } from './createNewElement.js';
import { fetchLOTRApi } from './fetchLOTRApi.js';
import { fetchPokemonApi } from './fetchPokemonApi.js';

let characterList = [
  {
    name: 'Frodo',
    dbName: 'Frodo+Baggins',
  },
  {
    name: 'Samwise',
    dbName: 'Samwise+Gamgee',
  },
  {
    name: 'Bilbo',
    dbName: 'Bilbo+Baggins',
  },
  {
    name: 'Gandalf',
    dbName: 'Gandalf',
  },
  {
    name: 'Gollum',
    dbName: 'Gollum',
  },
  {
    name: 'Legolas',
    dbName: 'Legolas',
  },
  {
    name: 'Aragorn',
    dbName: 'Aragorn+II+Elessar',
  },
  {
    name: 'Boromir',
    dbName: 'Boromir',
  },
  {
    name: 'Peregrin',
    dbName: 'Peregrin+Took',
  },
  {
    name: 'Meriadoc',
    dbName: 'Meriadoc+Brandybuck',
  },
  {
    name: 'Gimli',
    dbName: 'Gimli',
  },
  {
    name: 'Saruman',
    dbName: 'Saruman',
  },
  {
    name: 'Galadriel',
    dbName: 'Galadriel',
  },
  {
    name: 'Elrond',
    dbName: 'Elrond',
  },
  {
    name: 'Denethor',
    dbName: 'Denethor+II',
  },
  {
    name: 'Theoden',
    dbName: 'Th%C3%A9oden',
  },
  {
    name: 'Arwen',
    dbName: 'Arwen',
  },
  {
    name: 'Eowyn',
    dbName: '%C3%89owyn',
  },
];

export async function buildQuestionLayout() {
  if (mainData.roundsPlayedCounter === 10) {
    gameOver();
    return;
  }

  mainData.bonusTimerCounter = 20;
  let question;
  let img;

  // LOTR code
  if (mainData.activeUniverse === 'LOTR') {
    let character =
      characterList[Math.floor(Math.random() * characterList.length)];
    let { dbName, name } = character;
    mainData.correctAnswer = name;

    let characterApi = await fetchLOTRApi('character', dbName);

    let id = characterApi.docs[0]._id;

    let quotes = await fetchLOTRApi('quote', name, id);

    let loop = true;
    while (loop === true) {
      let quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
      if (quote.dialog.length > 30) {
        mainData.questionQuote = quote;
        loop = false;
      }
    }

    let dialog = mainData.questionQuote.dialog;

    question = `Which character said: "${dialog}"?`;

    let falseAnswers = characterList.filter(
      (item) => item.name !== mainData.correctAnswer
    );

    for (let i = 0; i < 3; i++) {
      let randomCharacter =
        falseAnswers[Math.floor(Math.random() * characterList.length)];
      mainData.incorrectAnswers.push(randomCharacter);
    }
  }

  if (mainData.activeUniverse === 'pokemon') {
    let allPokemon = await fetchPokemonApi();
    let id = Math.floor(Math.random() * 151) + 1;
    let pokemon = await fetchPokemonApi(id);
    question = `Which pokemon is this??`;

    // need to store as pokemonImage image src from pokemon
    let imgSrc = pokemon.sprites.front_default;
    img = createNewElement('img', '', 'img-pokemon');
    img.src = imgSrc;

    // create incorectAnswers array
    for (let i = 0; i < 3; i++) {
      let randomPokemon =
        allPokemon.results[Math.floor(Math.random() * pokemon.length)].name;
      mainData.incorrectAnswers.push(randomPokemon);
    }
  }

  // check universe that has been clicked and adapt styling
  let questionPageContainer = document.querySelector('.page2');
  questionPageContainer.style.display = 'flex';

  let questionHeading = createNewElement(
    'h2',
    question,
    'question',
    'question'
  );
  let questionContainer = document.querySelector(
    '.page2__main2__tophalf__question'
  );
  questionContainer.innerHTML = '';
  questionContainer.appendChild(questionHeading);

  if (mainData.activeUniverse === 'pokemon') {
    questionContainer.appendChild(img);
  }

  buildMultipleAnswers();

  if (mainData.firstQuestion === false) {
    startTimer();
    mainData.firstQuestion = true;
  } else {
    mainData.bonusTimerCounter = 20;
  }

  incrementRoundsPlayedCounter();
}
