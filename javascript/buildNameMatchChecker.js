import {mainData} from "./main.js"
import {startTimer} from "./startTimer.js"

let clickedTopHalfElement 
let clickedBottomHalfElement 
let TwoItemsClicked = 0

function deselectAllSquare(){
  let getAllSquares = document.querySelectorAll(".page2__main2 h6")
  getAllSquares.forEach((item)=>{
    item.style.backgroundColor = "white"
  })
  TwoItemsClicked = 0
}
function removeRightAnswer(){
  console.log("welldone",clickedTopHalfElement,clickedBottomHalfElement)
  let getElementToRemoveTop = document.querySelector(`.page2__main2__tophalf__question .${clickedTopHalfElement}`)

  getElementToRemoveTop.remove()

  let getElementToRemoveBottom = document.querySelector(`.page2__main2__bottomhalf .${clickedBottomHalfElement}`)
  
  getElementToRemoveBottom.remove()


}



export async function NameMatchChecker(){
  // 1. grab the class with a add event listener from the top section
  // 1. grab the class with a add event listener from the bottom section
  // 1a. each event fires a trigger to see if they match
  // 2. if 2 are selected then check if they are the same class name
  // 2. if they are the same class remove them from the screen and add points to the mainData.score and set the 2 clicked to 0 to unhighlight selected
  // 3. if they are wrong unhighlight
  startTimer()
  
  let getClassFromTophalf = document.querySelectorAll(".page2__main2__tophalf__question h6")

  getClassFromTophalf.forEach((item)=>{
    item.addEventListener("click",(e)=>{
      item.style.backgroundColor = "red"
      clickedTopHalfElement = e.target.className

      TwoItemsClicked++

      if(clickedTopHalfElement == clickedBottomHalfElement && TwoItemsClicked == 2){
        mainData.score +=10

        // let getElementToRemoveTop = document.querySelector(`.page2__main2__tophalf__question .${e.target.className}`)

        // getElementToRemoveTop.remove()
        removeRightAnswer()
      }
      if(TwoItemsClicked == 2){
        deselectAllSquare()
      }
    })
  })
  // above and below are the same code but one for the top screem and one for bottom
  let getClassFromBottomHalf = document.querySelectorAll(".page2__main2__bottomhalf h6")

  getClassFromBottomHalf.forEach((item)=>{
    item.addEventListener("click",(e)=>{
      item.style.backgroundColor = "red"
      clickedBottomHalfElement = e.target.className
      TwoItemsClicked++
      if(clickedTopHalfElement == clickedBottomHalfElement && TwoItemsClicked == 2){
        mainData.score +=10
        // let getElementToRemoveBottom = document.querySelector(`.page2__main2__bottomhalf .${e.target.className}`)
        // getElementToRemoveBottom.remove()
        removeRightAnswer()

      }
      if(TwoItemsClicked == 2){
        deselectAllSquare()
      }
    })
  })
}