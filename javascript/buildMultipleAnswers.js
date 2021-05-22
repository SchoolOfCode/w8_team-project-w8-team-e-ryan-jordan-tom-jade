//API access token (LOTR): MtE3FIlC6oApnuyWQX7X

import { mainData } from './main.js';
import { createNewElement } from './createNewElement.js';
// import { checkAnswer } from './checkAnswer.js';
// import { LOTR_API_KEY } from '../config/dev.js';

function getRandomIncorrectAnswer() {
  // randomly choose index of correct answer
  const randomIndexSelection = Math.floor(Math.random() * mainData.incorrectAnswers.length);
  // assign random number to character name
  const randomCharacter = mainData.incorrectAnswers[randomIndexSelection];
  console.log(randomCharacter);
  return randomCharacter;
}



export function buildMultipleAnswers() {

  // check export works
  console.log('build multiple answers called');

  // test getRandomIncorrectAnswer()
  getRandomIncorrectAnswer();

  // create ul for answer layout
  let ul = createNewElement("ul");
  
  // create correct answer
  let li_1 = createNewElement("li", mainData.correctAnswer, "correct-answer", "answer-1");
  
  // create 3 incorrect answers
  // Need to ensure no repeat answers!!!
  let li_2 = createNewElement("li", getRandomIncorrectAnswer(), "incorrect-answer", "answer-2");
  let li_3 = createNewElement("li", getRandomIncorrectAnswer(), "incorrect-answer", "answer-3");
  let li_4 = createNewElement("li", getRandomIncorrectAnswer(), "incorrect-answer", "answer-4");

  // put answers in an array
  let answersArray = [li_1, li_2, li_3, li_4];
  console.log(answersArray);

  // mix up answers for random output to buttons
  function shuffle() {
    answersArray.sort(() => Math.random() - 0.5);
  }
  shuffle();
  console.log(answersArray);
  
  // display as buttons
  let answer1 = createNewElement("button", answersArray[0].innerText);
  let answer2 = createNewElement("button", answersArray[1].innerText);
  let answer3 = createNewElement("button", answersArray[2].innerText);
  let answer4 = createNewElement("button", answersArray[3].innerText);

  // test that buttons appear in HTML randomly

  document.body.appendChild(answer1);
  document.body.appendChild(answer2);
  document.body.appendChild(answer3);
  document.body.appendChild(answer4);

  // append buttons to ul

  // append answers to answer section (NEED TO AUDIT)
  // document.querySelector(".page2__main2__answer").appendChild(answer1);
 



 // document.querySelector("ul").appendChild(answer1);
}

// add event listeners to each button to check answer
// button.addEventListener("click", checkAnswer);




//"They cursed us" - Gollum (id_5cd99d4bde30eff6ebccfe9e)