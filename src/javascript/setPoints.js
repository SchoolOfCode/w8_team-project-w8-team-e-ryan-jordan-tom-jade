import { mainData } from './main.js';

export function setPoints() {
  if (mainData.activeUniverse === 'LOTR') {
    mainData.score.LOTR += 10;
    if (mainData.bonusTimerCounter >= 15) {
      mainData.score.LOTR += 5;
    }
  }

  if (mainData.activeUniverse === 'pokemon') {
    mainData.score.pokemon += 10;
    if (mainData.bonusTimerCounter >= 15) {
      mainData.score.pokemon += 5;
    }
  }

  if (mainData.activeUniverse === 'StarWars') {
    mainData.score.starWars += 10;
    if (mainData.bonusTimerCounter >= 15) {
      mainData.score.starWars += 5;
    }
  }
  mainData.score.total =
    mainData.score.LOTR + mainData.score.pokemon + mainData.score.starWars;
}
