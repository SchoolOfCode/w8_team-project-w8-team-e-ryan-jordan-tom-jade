// make page start game area once universe is clicked
import {mainData} from "./main.js"

export function StartGame(){

  let favUnipick = mainData.favUniverse
  let startbutton = document.querySelector(".page__main__startgame--start")
  startbutton.innerText = favUnipick
  console.log("hello")
  let getStartGameArea = document.querySelector(".page__main__startgame")
  getStartGameArea.style.height = "20%"

  let displayUniverse = document.querySelector(".page__main__startgame--start")
  let displayNo = document.querySelector(".page__main__startgame--yes")
  let displayYes = document.querySelector(".page__main__startgame--no")
  displayNo.style.display = "block"
  displayUniverse.style.display = "block"
  displayYes.style.display = "block"
  
}

