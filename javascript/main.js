import { StartGame } from './startGame.js';
import { getUserName } from './getUserName.js';
import { LOTR_API_KEY } from '../config/dev.js';

// Explain let vs const for object
const mainData = {
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
