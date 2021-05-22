import { mainData } from './main.js';
import { gameOver } from './gameOver.js';
import { buildMultipleAnswers } from './buildMultipleAnswers.js';
import { startTimer } from './startTimer.js';
import { incrementRoundsPlayedCounter } from './incrementRoundsPlayedCounter.js';
import { createNewElement } from './createNewElement.js';

export function buildQuestionLayout() {
  if ((mainData.roundsPlayedCounter = 10)) {
    gameOver();
    return;
  }

  // check universe that has been clicked and adapt styling
  let questionPageContainer = document.querySelector('.page2');
  questionPageContainer.style.display = 'flex';

  let questionHeading = createNewElement('h2');
}

// build headings and rest of page layout
// call function startTimer()
// grab info from mainData (**large amount of data and pull out maindata.quote ,
// maindata.correctAnswer, maindata.incorrecstAnswers**)
// pick information we need for question
// call buildMultipleAnswers()
// call incrementRoundsPlayedCounter(+1)
// createElements for the question to be displayed and append to domselected skeleton
