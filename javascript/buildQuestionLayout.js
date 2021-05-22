import { mainData } from './main.js';
import { gameOver } from './gameOver.js';
import { buildMultipleAnswers } from './buildMultipleAnswers.js';
import { startTimer } from './startTimer.js';
import { incrementRoundsPlayedCounter } from './incrementRoundsPlayedCounter.js';
import { createNewElement } from './createNewElement.js';
import { fetchLOTRApi } from './fetchLOTRApi.js';

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
  console.log(mainData);
  if (mainData.roundsPlayedCounter === 10) {
    gameOver();
    return;
  }

  // get list of characters
  let character =
    characterList[Math.floor(Math.random() * characterList.length)];
  let { dbName, name } = character;
  mainData.correctAnswer = name;
  console.log(dbName);
  let characterApi = await fetchLOTRApi('character', dbName);
  console.log(characterApi);
  let id = characterApi.docs[0]._id;

  console.log(characterList);

  let quotes = await fetchLOTRApi('quote', name, id);
  console.log(quotes);

  let loop = true;
  while (loop === true) {
    let quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
    if (quote.dialog.length > 30) {
      mainData.questionQuote = quote;
      loop = false;
    }
  }

  // check universe that has been clicked and adapt styling
  let questionPageContainer = document.querySelector('.page2');
  questionPageContainer.style.display = 'flex';

  let dialog = mainData.questionQuote.dialog;

  let question = `Which character said: "${dialog}"?`;

  let questionHeading = createNewElement(
    'h2',
    question,
    'question',
    'question'
  );
  let questionContainer = document.querySelector('.page2__header2__box1');
  questionContainer.appendChild(questionHeading);

  startTimer();
  buildMultipleAnswers();
  incrementRoundsPlayedCounter();
}
