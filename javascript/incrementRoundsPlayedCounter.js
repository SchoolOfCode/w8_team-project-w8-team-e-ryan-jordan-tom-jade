import { mainData } from './main.js';

export function incrementRoundsPlayedCounter() {
  mainData.roundsPlayedCounter++;
  if (mainData.roundsPlayedCounter >= 10) {
    if (mainData.activeUniverse === 'LOTR') {
      mainData.roundsCompleted.LOTR = true;
      mainData.activeUniverse = 'pokemon';
      mainData.roundsPlayedCounter = 0;
    } else if (mainData.activeUniverse === 'pokemon') {
      mainData.roundsCompleted.pokemon = true;
      mainData.activeUniverse = 'LOTR';
      mainData.roundsPlayedCounter = 0;
    }
  }
}
