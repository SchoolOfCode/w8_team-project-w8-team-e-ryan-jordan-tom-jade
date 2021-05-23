import { StartGame } from './startGame.js';
import { mainData } from './main.js';

let favUniverseArrayNodes = document.querySelectorAll('.chosenUniv');
favUniverseArrayNodes.forEach((node) => {
  node.addEventListener('click', storeFavUniverse);
});

export function storeFavUniverse(event) {
  mainData.favUniverse = event.target.dataset.name;
  mainData.activeUniverse = event.target.dataset.name;
  console.log(mainData);
  StartGame();
}
