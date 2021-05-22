import { mainData } from "./main.js"
import { buildQuestionLayout } from "./buildQuestionLayout"

export function handleStartYes() {
    //listen for yes or no click from start screen
    // if click = yes then toggle to gameplay screen 
    // turn off the start screen 
    document.querySelector(".page__main__startgame--yes").addEventListener("click", buildQuestionLayout())




}