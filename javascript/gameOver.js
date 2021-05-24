import { mainData } from "./main.js"
import { handleStartNo } from "./handleStartNo.js"

let displayPage = document.querySelector(".gameOver")
let backToMenu = document.querySelector(".gameOver__main__content--menu")
backToMenu.addEventListener("click", goBackToMenu)

export function gameOver() {

  let unDisplayPage2 = document.querySelector(".page2")
  let getUserArea = document.querySelector(".gameOver__main__content--user")
  getUserArea.innerText = mainData.userInput
  displayPage.style.display = "flex"
  unDisplayPage2.style.display = "none"


  let getPoints = document.querySelector(".gameOver__main__content--points")
  getPoints.innerText = `${mainData.score} Points`
  console.log('game over called');
  
}

export function goBackToMenu(){
  let turnOnPage1 = document.querySelector(".page")
    turnOnPage1.style.display = 'flex';
  displayPage.style.display = "none"
  mainData.score = 0
  // mainData.roundsCompleted.LOTR = false
  // mainData.roundsCompleted.pokemon = false
  if(mainData.activeUniverse == "StarWars"){
    document.querySelector(".page2__main2__bottomhalf").innerHTML = "<div class='page2__main2__bottomhalf__answer'></div>"
    
  }
  handleStartNo()
}
