# FUNCTION LAYOUT

## 1. gameData ✔️

    mainData global object

## 2. getInputValue(){} ✔️

    get value of input and set the mainData.userInput and set it to the main screen & gamescreen

## 3. StoreFavUniverse(){} ✔️

    so getting getting users input for addEventListener and storing it on the main data object and bring us to page once StarGame has been called

## 4. StartGame(){} ✔️

    once clicked show yes/no options to enter question page if (No) clicked wipe stored favUniverse .

adds two popup functions to be displayed (yes)/(no)

## 5. handleStarYes(){}

    so toggle from front screen to questionaire screen
    call buildQuestionLayout()

## 5. handleStartNo(){} ✔️

    wipes stored fav universe from object saved data

## 6. buildQuestionLayout(){} ✔️

    if roundsPlayedCounter = 10 then call gameOver()
    return (in the if statement)
    check universe that has been clicked and adapt styling
    build headings and rest of page layout
    call function startTimer()
    grab info from mainData (**large amount of data and pull out maindata.quote ,
    maindata.correctAnswer, maindata.incorrecstAnswers**)
    pick information we need for question
    call buildMultipleAnswers()
    call incrementRoundsPlayedCounter(+1)
    createElements for the question to be displayed and append to domselected skeleton

## 7. buildMultipleAnswers(){} ✔️

    Create a ul
    Create li's (4)
    Create buttons for multiple choice answers (4 buttons for multiple choice)
    Make an array containing the answers ( Mix up the answers so the incorrect and correct answers are in a different position each question)
    Add correct answer to dataset Attribute on the correct button
    Add incorrect answer to dataset Attribute on the incorrect buttons
    Add eventListeners to each button attach checkAnswer()to onclick
    Append buttons to li's
    Append li's to ul
    Append ul to section answer container

## 8. checkAnswer(event){} ✔️

    clear timer clearInterval
    function to check answers event.target.dataset
    check  event.target.dataset against mainData.correctAnswer for a match which = correct answer
      add points call setPoints()

if incorrect recall buildQuestionLayout()

## 9. setPoints(){} ✔️

    maindata.score += by 10 points (correct answer )
    check timer for bonus point if the question was answered within 5 second
    if maindaData.bonusTimerCounter is > or = 15 (bonus points)
    maindata.score += by 5 points ( bonus points)
    increment maindata.roundsPlayedCounter + (by 1)
    call buildQuestionLayout() (next round)

## 10. startTimer (){} ✔️

    create variable with setInterval(()=>{-maindata.bonusTimerCounter}){
    }
    setInterval function after its decreased the bonusTimerCounter
    check if the mainData.bonusTimerCounter has gone to zero
    if yes then call buildQuestionLayout()

## 11. incrementRoundsPlayedCounter (){} ✔️

    On each round played setPoints calls this function
    increase mainData.roundsPlayedCounter by 1 (+)

## fetchPokemonApi(){}

## fetchStarWarsApi(){}
