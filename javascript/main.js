import { StartGame } from './startGame.js';
import { getUserName } from './getUserName.js';
import { LOTR_API_KEY } from '../config/dev.js';
import { storeFavUniverse } from './storeFavUniverse.js';

// Explain let vs const for object
export const mainData = {
  score: 0,
  userInput: getUserName,
  ApiResponse: '',
  favUniverse: '',
  questionQuote: '',
  correctAnswer: '',
  incorrectAnswers: [],
  bonusTimerCounter: 0,
  roundsPlayedCounter: 0,
};

let favUniverseArrayNodes = document.querySelectorAll('.chosenUniv');
favUniverseArrayNodes.forEach((node) => {
  node.addEventListener('click', storeFavUniverse);
});
