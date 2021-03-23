// declare variables to target buttons in html file
const timerQuiz = document.getElementById("timer");
const startQuizButton = document.getElementById("start-quiz-button");
const startQuizScreen = document.getElementById("quiz-start");
const header = document.getElementById("header-container");

// variable that targets the button element with answer
const buttonAnswer = document.getElementsByClassName("button-answer");

//store my questions in arrays
const quizQuestions = [
  {
    question1: "Question1?",
    answers: { a: "answer1", b: "answer2", c: "answer3", d: "answer4" },
    correctAnswer: "a",
  },
  // store correct answer

  {
    question1: "Question1?",
    answers: { a: "answer1", b: "answer2", c: "answer3", d: "answer4" },
    correctAnswer: "c",
  },
  {
    question1: "Question1?",
    answers: { a: "answer1", b: "answer2", c: "answer3", d: "answer4" },
    correctAnswer: "b",
  },
  {
    question1: "Question1?",
    answers: { a: "answer1", b: "answer2", c: "answer3", d: "answer4" },
    correctAnswer: "d",
  },
  {
    question1: "Question1?",
    answers: { a: "answer1", b: "answer2", c: "answer3", d: "answer4" },
    correctAnswer: "a",
  },
];

//initialize timer value and total score counter value
let timeValue = 5;
let scoreQuiz = 0;

// add event listener to start the quiz and timer
startQuizButton.addEventListener("click", startQuiz);

/* create countdown function*/
function startQuiz() {
  const callback = function () {
    if (timeValue >= 0) {
      timerQuiz.textContent = timeValue;
      timeValue -= 1;
    } else {
      //remove start quiz div from the DOM
      startQuizScreen.remove();
      //append submit scores form div
      document.body.insertBefore(createAndAppendForm, header - container);
    }
  };
  // function executed every time a button is clicked
  const timeAnswerQuestion = setInterval(callback, 1000);

  //here declare function to create and append form
  function createAndAppendForm() {
    //create div
    const divForm = document.createElement("div");
    //create h4
    const headingForm = document.createElement("h2");
    //create div info submit scores
    const infoSubmit = document.createElement("div");
    //create input name and score
    const inputScore = document.createElement("input");
    // create submit scores button
    const submitScoreButton = document.createElement("button");
    //append child elements to body
    bodyEl.appendChild(divForm);
    bodyEl.appendChild(headingForm);
    bodyEl.appendChild(infoSubmit);
    bodyEl.appendChild(inputScore);
    bodyEl.appendChild(submitScoreButton);
    // add CSS style properties
    divForm.setAttribute("class", quiz - start);
    headingForm.setAttribute("class", quiz - heading);
    infoSubmit.setAttribute("class", quiz - text);
  }
}
//here function to create div element for quiz content
createQuizContainer = () => {
  // create div for questions screen
  const divQuizContainer = document.createElement("div");
  const questionContent = document.createElement("h2");
  const answerButtonOne = document.createElement("button");
  const answerButtonTwo = document.createElement("button");
  const answerButtonThree = document.createElement("button");
  const answerButtonFour = document.createElement("button");
  //append quiz elements to the body
  document.body.insertAfter(divQuizContainer, "header-container");
  divQuizContainer.appendChild(questionContent);
  divQuizContainer.appendChild(answerButtonOne);
  divQuizContainer.appendChild(answerButtonTwo);
  divQuizContainer.appendChild(answerButtonThree);
  divQuizContainer.appendChild(answerButtonFour);
  // add CSS style properties for quiz container elements
  divQuizContainer.setAttribute("class", quiz - start);
  questionContent.setAttribute("class", quiz - heading);
  answerButtonOne,
    answerButtonTwo,
    answerButtonThree,
    answerButtonFour.setAttribute("class", answer - button);
};

// when users presses right answer, change question, vAriable that stores

// add function to count the number of correct answers
countTotalScore = () => {
  counterSpan.textContent = count;
};

// add event listener and function to check for the answer when answer button clicked
buttonAnswer.addEventListener("click", verifyAnswer);
const verifyAnswer = () => {
  // here check if answer is correct, if yes counter incremented by one and if not display wrong message
};
