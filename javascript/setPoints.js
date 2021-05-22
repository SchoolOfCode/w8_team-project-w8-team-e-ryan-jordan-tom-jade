import { mainData } from './main.js';

export function setPoints() {
  console.log('Setting 10 points');
  mainData.score += 10;
  // check timer for bonus point if the question was answered within 5 second

  if (mainData.bonusTimerCounter >= 15) {
    mainData.score += 5;
    console.log('bonus points');
  }
}
