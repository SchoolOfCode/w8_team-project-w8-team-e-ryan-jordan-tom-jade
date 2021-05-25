import { buildQuestionLayout } from './buildQuestionLayout.js';
import { mainData } from './main.js';
import { gameOver } from './gameOver.js';
let timer = 20;
let getTimerBox = document.querySelector('.page2__main2__tophalf__timer');

export function startTimer(time) {
  if (mainData.activeUniverse == 'StarWars') {
    mainData.bonusTimerCounter = 40;
  }

  let countdown = setInterval(() => {
    if (mainData.bonusTimerCounter <= 0) {
      if (
        mainData.activeUniverse === 'LOTR' ||
        mainData.activeUniverse === 'pokemon'
      ) {
        buildQuestionLayout();
      }
      if (mainData.activeUniverse === 'StarWars') {
        clearInterval(countdown);
        gameOver();
      }
      // clearInterval(countdown);
      // mainData.bonusTimerCounter = 20;
      // return;
    }
    getTimerBox.innerText = mainData.bonusTimerCounter;
    mainData.bonusTimerCounter--;
  }, 1000);
  return countdown;
}
