// make page start game area once universe is clicked
import { mainData } from "./main.js"

export function StartGame() {
    changeHeight()
    let favUnipick = mainData.favUniverse
    let startbutton = document.querySelector(".page__main__startgame--start")
    startbutton.innerText = favUnipick
        // add yes / no functions to be called from here 

    // 2. This is to show the button and change the high of the button area

    function changeHeight() {
        let getStartGameArea = document.querySelector(".page__main__startgame")
        getStartGameArea.style.height = "20%"
    }
}