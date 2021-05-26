import { mainData } from "./main.js"
import { changeUserLogo } from "./ChangeUserLogo.js"
export function getUserName() {
    let userInput = document.querySelector(".page__main__user__input--text").value
    mainData.userInput = userInput
    changeUserLogo()
    console.log(mainData)


    //get value of input and set the mainData.userInput and set it to the main screen & gamescreen

}

let pressEnter = document.querySelector(".page__main__user__input--text")
pressEnter.addEventListener("keydown",(event)=>{
    
    if(event.key == "Enter"){
        getUserName()
    }
    
})
let userNameButton = document.querySelector(".fa-hand-paper");
userNameButton.addEventListener("click", getUserName);
// let requestOptions = {
//         headers: {}
//     }
//     (fetch('url', requestOptions)
//     (fetch('url', requestOptions)