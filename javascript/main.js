import { StartGame } from './startGame.js';
import { handleStartNo } from './handleStartNo.js';
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
