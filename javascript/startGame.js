// make page start game area once universe is clicked


// change 
let deleteThis = document.querySelectorAll(".chosenUniv");
deleteThis.forEach((item)=>{
  item.addEventListener("click",StartGame)
})
// deleteThis.addEventListener("click",StartGame)

export function StartGame(event){
  changeHeight()
  console.log(event.target.dataset)
  // add yes / no functions to be called from here 


  // 2. This is to show the button and change the high of the button area

  function changeHeight(){
    let getStartGameArea = document.querySelector(".page__main__startgame")
    getStartGameArea.style.height = "20%"
  }

}