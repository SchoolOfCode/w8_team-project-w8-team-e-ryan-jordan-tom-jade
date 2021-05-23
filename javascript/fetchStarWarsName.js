import {mainData} from "./main.js"



export async function getStarWarsNames(){

  let randomPage = Math.floor(Math.random()*6)

  
  
  async function fetchNames(){
    let pageResults = `http://swapi.dev/api/people/?page=${randomPage+1}`
    const response = await fetch(pageResults)
    let data = await response.json()
    console.log(data.results) 
    return data.results
  }

  let list1 = fetchNames()
  randomPage++
  let list2 = fetchNames()
  
  return mainData.listOfStarWarsNames = [await list1, await list2]
  

}





