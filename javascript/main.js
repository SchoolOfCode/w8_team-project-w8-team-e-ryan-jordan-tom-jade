import { StartGame } from './startGame.js';
import { getUserName } from './getUserName.js';
import { LOTR_API_KEY } from '../config/dev.js';
import { storeFavUniverse } from './storeFavUniverse.js';
import { fetchLOTRApi } from './fetchLOTRApi.js';

// Explain let vs const for object
export const mainData = {
  score: 0,
  userInput: getUserName,
  ApiResponse: '',
  favUniverse: '',
  questionQuote: '',
  correctAnswer: '',
  incorrectAnswers: ['1', '2', 345679013],
  bonusTimerCounter: 0,
  roundsPlayedCounter: 0,
};

fetchLOTRApi('');
