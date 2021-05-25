import {mainData} from "./main.js"
let getNoButton = document.querySelector(".page__main__startgame--no")
getNoButton.addEventListener("click",handleStartNo)

export function handleStartNo(){
  mainData.favUniverse = ""
  console.log(mainData.favUniverse)
  let getStartGameArea = document.querySelector(".page__main__startgame")
  getStartGameArea.style.height = "0%"
  let displayUniverse = document.querySelector(".page__main__startgame--start")
  let displayNo = document.querySelector(".page__main__startgame--yes")
  let displayYes = document.querySelector(".page__main__startgame--no")
  displayNo.style.display = "none"
  displayUniverse.style.display = "none"
  displayYes.style.display = "none"

  let changeSelectionHight = document.querySelector(".page__main__selection")
  changeSelectionHight.style.height = "80%"
  mainData.roundsCompleted.LOTR = false
  mainData.roundsCompleted.pokemon = false
  mainData.roundsCompleted.starWars = false
}