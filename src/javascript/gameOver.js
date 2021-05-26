import { mainData } from './main.js';
import { handleStartNo } from './handleStartNo.js';
import { createNewElement } from './createNewElement.js';

let displayPage = document.querySelector('.gameOver');
let backToMenu = document.querySelector('.gameOver__main__content--menu');
backToMenu.addEventListener('click', goBackToMenu);

export function gameOver() {
  let unDisplayPage2 = document.querySelector('.page2');
  let getUserArea = document.querySelector('.gameOver__main__content--user');
  getUserArea.innerText = mainData.userInput;
  displayPage.style.display = 'flex';
  unDisplayPage2.style.display = 'none';

  let getPoints = document.querySelector('.gameOver__main__content--points');
  getPoints.innerText = `${mainData.score.total} Points`;
  let LOTRscore = createNewElement(
    'p',
    `LOTR: ${mainData.score.LOTR} points`,
    'sub-score'
  );
  let pokemonScore = createNewElement(
    'p',
    `Pokemon: ${mainData.score.pokemon} points`,
    'sub-score'
  );
  let starWarsScore = createNewElement(
    'p',
    `Star Wars: ${mainData.score.starWars} points`,
    'sub-score'
  );
  getPoints.append(LOTRscore, pokemonScore, starWarsScore);

  console.log('game over called');
}

export function goBackToMenu() {
  let turnOnPage1 = document.querySelector('.page');
  turnOnPage1.style.display = 'flex';
  displayPage.style.display = 'none';
  mainData.score.total = 0;
  mainData.score.LOTR = 0;
  mainData.score.pokemon = 0;
  mainData.score.starWars = 0;
  mainData.roundsCompleted.LOTR = false;
  mainData.roundsCompleted.pokemon = false;
  mainData.roundsCompleted.starWars = false;
  handleStartNo();
}
