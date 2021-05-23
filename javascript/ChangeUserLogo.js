import {mainData} from "./main.js"


export function changeUserLogo(){
  let firstInitial = mainData.userInput.charAt(0)
  document.querySelector(".page__main__user--image--initial").innerText = firstInitial.toUpperCase()
  console.log(firstInitial)
}