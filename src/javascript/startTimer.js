import { buildQuestionLayout } from './buildQuestionLayout.js';
import { mainData } from './main.js';
import { gameOver } from './gameOver.js';

let getTimerBox = document.querySelector('.page2__main2__tophalf__timer');

export function startTimer(time) {
  if (mainData.activeUniverse === 'StarWars') {
    mainData.bonusTimerCounter = 25;
  }
  console.log("timer is called")
  let countdown = setInterval(() => {
    if (mainData.bonusTimerCounter <= 0) {
      if (
        mainData.roundsCompleted.LOTR === true &&
        mainData.roundsCompleted.pokemon === true &&
        mainData.roundsCompleted.starWars === true
      ) {
        gameOver();
        // removed clear interval so timer runs on replay (w/o page refresh)
        return;
      }
      buildQuestionLayout();
    }
    getTimerBox.innerText = mainData.bonusTimerCounter;
    mainData.bonusTimerCounter--;
  }, 1000);
  return countdown;
}
