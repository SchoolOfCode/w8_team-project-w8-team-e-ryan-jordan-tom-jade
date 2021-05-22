import { StartGame } from './startGame.js';
import { mainData } from './main.js';

export function storeFavUniverse(event) {
  let favUniverse = event.target.dataset.name;
  mainData.favUniverse = favUniverse;
  StartGame();
}
