import { StartGame } from './startGame.js';
import { mainData } from './main.js';

let favUniverseArrayNodes = document.querySelectorAll('.chosenUniv');
favUniverseArrayNodes.forEach((node) => {
  node.addEventListener('click', storeFavUniverse);
});

export function storeFavUniverse(event) {
  let favUniverse = event.target.dataset.name;
  mainData.favUniverse = favUniverse;
  console.log(mainData);
  StartGame();
}
