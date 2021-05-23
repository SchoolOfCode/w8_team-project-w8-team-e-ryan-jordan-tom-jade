import { mainData } from './main.js';
import { createNewElement } from './createNewElement.js';
import { checkAnswer } from './checkAnswer.js';

export function buildMultipleAnswers() {
  // create ul for answer layout
  let ul = createNewElement('ul');

  // create correct answer
  let li_1 = createNewElement(
    'li',
    mainData.correctAnswer,
    'correct-answer',
    'answer-1'
  );

  // create 3 incorrect answers
  // Need to ensure no repeat answers!!!
  let li_2 = createNewElement(
    'li',
    mainData.incorrectAnswers[0],
    'incorrect-answer',
    'answer-2'
  );
  let li_3 = createNewElement(
    'li',
    mainData.incorrectAnswers[1],
    'incorrect-answer',
    'answer-3'
  );
  let li_4 = createNewElement(
    'li',
    mainData.incorrectAnswers[2],
    'incorrect-answer',
    'answer-4'
  );

  // put answers in an array
  let answersArray = [li_1, li_2, li_3, li_4];

  // mix up answers for random output to buttons
  function shuffle() {
    answersArray.sort(() => Math.random() - 0.5);
  }
  shuffle();

  // display as buttons
  let answer1 = createNewElement('button', answersArray[0].innerText);
  answer1.setAttribute('data-name', answersArray[0].innerText);

  let answer2 = createNewElement('button', answersArray[1].innerText);
  answer2.setAttribute('data-name', answersArray[1].innerText);

  let answer3 = createNewElement('button', answersArray[2].innerText);
  answer3.setAttribute('data-name', answersArray[2].innerText);

  let answer4 = createNewElement('button', answersArray[3].innerText);
  answer4.setAttribute('data-name', answersArray[3].innerText);

  // add event listeners
  answer1.addEventListener('click', checkAnswer);
  answer2.addEventListener('click', checkAnswer);
  answer3.addEventListener('click', checkAnswer);
  answer4.addEventListener('click', checkAnswer);

  // append buttons to HTML
  ul.append(answer1, answer2, answer3, answer4);

  let answerContainer = document.querySelector(
    '.page2__main2__bottomhalf__answer'
  );
  answerContainer.innerHTML = '';
  document.querySelector('.page2__main2__bottomhalf__answer').appendChild(ul);
}
