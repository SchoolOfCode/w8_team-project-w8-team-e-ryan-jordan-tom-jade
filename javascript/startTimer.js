import { buildQuestionLayout } from './buildQuestionLayout.js';

let timer = 20;
let getTimerBox = document.querySelector('.page2__main2__tophalf__timer');

export function startTimer() {
  let countdown = setInterval(() => {
    if (timer === 0) {
      clearInterval(countdown);
      buildQuestionLayout();
    }
    getTimerBox.innerText = timer;
    timer -= 1;
  }, 1000);
}
