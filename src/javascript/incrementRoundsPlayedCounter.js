import { mainData } from './main.js';

// export function incrementRoundsPlayedCounter() {
//   mainData.roundsPlayedCounter++;
//   if (mainData.roundsPlayedCounter >= 10) {
//     if (mainData.activeUniverse === 'LOTR') {
//       mainData.roundsCompleted.LOTR = true;
//       mainData.activeUniverse = 'pokemon';
//       mainData.roundsPlayedCounter = 0;
//     } else if (mainData.activeUniverse === 'pokemon') {
//       mainData.roundsCompleted.pokemon = true;
//       mainData.activeUniverse = 'LOTR';
//       mainData.roundsPlayedCounter = 0;
//     }
//   }
// }

export function incrementRoundsPlayedCounter(starwarstoggle) {
  if (starwarstoggle) {
    mainData.roundsPlayedCounter = 10;
  } else {
    mainData.roundsPlayedCounter++;
  }

  if (mainData.roundsPlayedCounter >= 10) {
    if (mainData.activeUniverse === 'LOTR') {
      mainData.roundsCompleted.LOTR = true;
      if (
        mainData.roundsCompleted.pokemon === true &&
        mainData.roundsCompleted.starWars === false
      ) {
        mainData.activeUniverse = 'StarWars';
      } else if (
        mainData.roundsCompleted.pokemon === false &&
        mainData.roundsCompleted.starWars === true
      ) {
        mainData.activeUniverse = 'pokemon';
      } else if (
        mainData.roundsCompleted.pokemon === false &&
        mainData.roundsCompleted.starWars === false
      ) {
        mainData.activeUniverse = 'pokemon';
      }
      mainData.roundsPlayedCounter = 0;
    } else if (mainData.activeUniverse === 'pokemon') {
      mainData.roundsCompleted.pokemon = true;
      if (
        mainData.roundsCompleted.LOTR === true &&
        mainData.roundsCompleted.starWars === false
      ) {
        mainData.activeUniverse = 'StarWars';
      } else if (
        mainData.roundsCompleted.LOTR === false &&
        mainData.roundsCompleted.starWars === true
      ) {
        mainData.activeUniverse = 'LOTR';
      } else if (
        mainData.roundsCompleted.LOTR === false &&
        mainData.roundsCompleted.starWars === false
      ) {
        mainData.activeUniverse = 'LOTR';
      }
      mainData.roundsPlayedCounter = 0;
    } else if (mainData.activeUniverse === 'StarWars') {
      mainData.roundsCompleted.starWars = true;
      if (
        mainData.roundsCompleted.pokemon === true &&
        mainData.roundsCompleted.LOTR === false
      ) {
        mainData.activeUniverse = 'LOTR';
      } else if (
        mainData.roundsCompleted.pokemon === false &&
        mainData.roundsCompleted.LOTR === true
      ) {
        mainData.activeUniverse = 'pokemon';
      } else if (
        mainData.roundsCompleted.pokemon === false &&
        mainData.roundsCompleted.LOTR === false
      ) {
        mainData.activeUniverse = 'pokemon';
      }
      mainData.roundsPlayedCounter = 0;
    }
  }
}
