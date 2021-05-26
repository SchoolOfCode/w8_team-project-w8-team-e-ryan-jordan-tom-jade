import { buildQuestionLayout } from "./buildQuestionLayout.js"
import { matchNamesAppendToScreen} from './buildNameMatchLayout.js'
import { mainData } from "./main.js";
document.querySelector(".page__main__startgame--yes").addEventListener("click", handleStartYes)


export function handleStartYes() {
    //listen for yes or no click from start screen
    // if click = yes then toggle to gameplay screen 
    // turn off the start screen
    mainData.bonusTimerCounter = 20
    if(mainData.userInput <=1){
        mainData.userInput = "John Doe"
    }
    let placeScoreOnScreen = document.querySelector(".page2__main2__tophalf__round")
    placeScoreOnScreen.innerText = mainData.score
    console.log(mainData.userInput)
    let turnOffStartPage = document.querySelector(".page")
    turnOffStartPage.style.display = 'none';
        
    buildQuestionLayout();
    //select the screen container ("page") off for the start screen call the build question ()
    
    
}