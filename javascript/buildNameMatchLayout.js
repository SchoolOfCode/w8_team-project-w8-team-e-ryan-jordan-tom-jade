import {mainData} from "./main.js"
import { getStarWarsNames } from './fetchStarWarsName.js';
import { createNewElement } from "./createNewElement.js"

export async function matchNamesAppendToScreen(){
  if(mainData.activeUniverse == "StarWars"){
    await getStarWarsNames()
    console.log("activated starwars")
    let getbottomArea = document.querySelector(".page2__main2__bottomhalf")
    getbottomArea.innerHTML = ""
    let getTopArea = document.querySelector(".page2__main2__tophalf__question")
    getTopArea.innerHTML = ""

    
    mainData.listOfStarWarsNames.forEach((item,index)=>{
      let firstName = item.split(" ")[0]
      let secoundName = item.split(" ")[1]

      let CreateDiv1 = createNewElement("h6", firstName,`${index}`)
      let CreateDiv2 = createNewElement("h6", secoundName,`${index}`)

      getTopArea.append(CreateDiv1) 
      getbottomArea.append(CreateDiv2) 
    })
 









  }

}
