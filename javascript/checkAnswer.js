import { mainData } from './main.js';
import { startTimer } from './startTimer.js';
import { setPoints } from './setPoints.js';
import { buildQuestionLayout } from './buildQuestionLayout.js';

export function checkAnswer(event) {
  console.log(event.target.dataset, 'event');
  //   clearInterval(countdown);
  // ^countdown is not accessible from this function
  if (event.target.dataset === mainData.correctAnswer) {
    setPoints();
  } else {
    buildQuestionLayout();
  }

  //     clear timer clearInterval
  //     function to check answers event.target.dataset
  //     check  event.target.dataset against mainData.correctAnswer for a match which = correct answer
  //       add points call setPoints()
  //   if incorrect recall buildQuestionLayout()
}
