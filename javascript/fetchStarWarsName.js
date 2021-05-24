import {mainData} from "./main.js"

export async function getStarWarsNames(){

  let randomPage = Math.floor(Math.random()*5)
  
  async function fetchNames(){
    let pageResults = `http://swapi.dev/api/people/?page=${randomPage+1}`
    const response = await fetch(pageResults)
    let data = await response.json()
    return data.results
  }
  let list1 = await fetchNames()
  randomPage++
  let list2 = await fetchNames()

  let list3 = list1.concat(list2)
  let checker = 0
  let extractNames = []
  list3.forEach((item)=>{
    for(let i =0;i<item.name.length;i++){
      if(item.name[i]==" "){
        
        checker++
      }
    }
    if(checker==1){
      extractNames.push( item.name)
    }
    checker=0
    
    //item.name.indexOf(" ") >= 1 && item.name.indexOf(" ") >= 1

  })

  return mainData.listOfStarWarsNames = await extractNames
  
}





