import {mainData} from "./main.js"
import { getStarWarsNames } from './fetchStarWarsName.js';
import { createNewElement } from "./createNewElement.js"
import { NameMatchChecker} from "./buildNameMatchChecker.js"

export async function matchNamesAppendToScreen(){

    await getStarWarsNames()
    console.log("activated starwars")
    let getbottomArea = document.querySelector(".page2__main2__bottomhalf__answer")
    getbottomArea.innerHTML = ""
    let getTopArea = document.querySelector(".page2__main2__tophalf__question")
    getTopArea.innerHTML = ""
    let questionExplainer = document.createElement("h2");
    questionExplainer.innerText = "Match First & Last Name";
    getTopArea.append(questionExplainer);

    function randomizeTheNodesArrays(){
      topNamedClass.sort(() => Math.random() - 0.5);
      bottomNamedClass.sort(() => Math.random() - 0.5);
      topNamedClass.forEach((item)=>{
        getTopArea.append(item)
      })
      bottomNamedClass.forEach((item)=>{
        getbottomArea.append(item)
      })
      let hoverAquaAllSquares = document.querySelectorAll(".page2__main2 h6");
      hoverAquaAllSquares.forEach((item) => {
        item.addEventListener("mouseover", (e) => item.style.backgroundColor = "aqua")
        item.addEventListener("mouseout", (e) => item.style.backgroundColor = "white")
      })
    }

    let topNamedClass = []
    let bottomNamedClass = []


    mainData.listOfStarWarsNames.forEach((item,index)=>{
      let firstName = item.split(" ")[0]
      let secoundName = item.split(" ")[1]

      let CreateDiv1 = createNewElement("h6", firstName,`char${index}`)
      let CreateDiv2 = createNewElement("h6", secoundName,`char${index}`)

      topNamedClass.push(CreateDiv1) 
      bottomNamedClass.push(CreateDiv2) 
    })
    randomizeTheNodesArrays()
  
  NameMatchChecker()
}