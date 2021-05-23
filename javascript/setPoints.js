import { mainData } from './main.js';

export function setPoints() {
  mainData.score += 10;

  if (mainData.bonusTimerCounter >= 15) {
    mainData.score += 5;
  }
}
