import { StartGame } from './startGame';

let favUniverseArrayNodes = document.querySelectorAll('.chosenUniv');
favUniverseArrayNodes.forEach((node) => {
  node.addEventListener('click', storeFavUniverse);
});

export function storeFavUniverse(event) {
  let favUniverse = event.target.dataset.name;
  mainData.favUniverse = favUniverse;
  StartGame();
}
