import { StartGame } from './startGame.js';
import { handleStartNo } from './handleStartNo.js';
import { handleStartYes } from './handleStartYes.js';
import { getUserName } from './getUserName.js';
import { LOTR_API_KEY } from '../config/dev.js';
import { storeFavUniverse } from './storeFavUniverse.js';
import { fetchLOTRApi } from './fetchLOTRApi.js';
import { buildQuestionLayout } from './buildQuestionLayout.js';
import { buildMultipleAnswers } from './buildMultipleAnswers.js';
import { startTimer } from './startTimer.js';
import { fetchPokemonApi } from './fetchPokemonApi.js';
import { gameOver } from './gameOver.js';
import { getStarWarsNames } from './fetchStarWarsName.js';


// Explain let vs const for object
export const mainData = {
    score: 0,
    userInput: getUserName,
    ApiResponse: '',
    favUniverse: '',
    questionQuote: '',
    correctAnswer: 'Gollum',
    incorrectAnswers: [],
    bonusTimerCounter: 20,
    roundsPlayedCounter: 0,
    firstQuestion: false,
    activeUniverse: 'LOTR',
    listOfStarWarsNames:""
};



getStarWarsNames()
console.log(mainData)
