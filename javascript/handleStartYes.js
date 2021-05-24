import { buildQuestionLayout } from "./buildQuestionLayout.js"
import { matchNamesAppendToScreen} from './buildNameMatchLayout.js'
document.querySelector(".page__main__startgame--yes").addEventListener("click", handleStartYes)


export function handleStartYes() {
    //listen for yes or no click from start screen
    // if click = yes then toggle to gameplay screen 
    // turn off the start screen 
    let turnOffStartPage = document.querySelector(".page")
    turnOffStartPage.style.display = 'none';
    
    buildQuestionLayout();
    matchNamesAppendToScreen()
    //select the screen container ("page") off for the start screen call the build question ()
}