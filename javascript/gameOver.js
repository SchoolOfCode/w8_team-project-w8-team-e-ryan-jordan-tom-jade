import { mainData } from "./main.js"
let displayPage = document.querySelector(".gameOver")
let backToMenu = document.querySelector(".gameOver__main__content--menu")
backToMenu.addEventListener("click", goBackToMenu)

export function gameOver() {

  let unDisplayPage2 = document.querySelector(".page2")
  let getUserArea = document.querySelector(".gameOver__main__content--user")
  getUserArea.innerText = mainData.userInput
  displayPage.style.display = "flex"
  unDisplayPage2 = "none"


  let getPoints = document.querySelector(".gameOver__main__content--points")
  getPoints.innerText = `${mainData.score} Points`
  console.log('game over called');
}

export function goBackToMenu(){
  displayPage.style.display = "none"
}
