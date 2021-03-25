// declare variables to target buttons in html file
const timerQuiz = document.getElementById("timer");
const quizContainer = document.getElementById("quiz-container");
const startQuizButton = document.getElementById("start-quiz-button");
const startQuizScreen = document.getElementById("quiz-start");
const header = document.getElementById("header-container");
const bodyEl = document.body;

//initialize timer value and total score counter value
let timeValue = 5;
let scoreQuiz = 0;

//store my questions in arrays
const quizQuestions = [
  {
    question: "Question1?",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: "answer2",
  },

  {
    question1: "Question1?",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: "answer1",
  },
  {
    question1: "Question1?",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: "answer4",
  },
  {
    question: "Question1?",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: "answer3",
  },
  {
    question: "Question1?",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: "answer1",
  },
];

//create a function to display the answer choices
const createAnswerChoices = (answers) => {
  const parentDiv = document.createElement("div");
  const createAnswerChoiceAndAppend = (answer) => {
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute(answer);
    //add text content to the button
    button.textContent = answer;
    //append answer buttons to the div
    div.appendChild("data-answer", button);
    parentDiv.appendChild(div);
  };
  answers.forEach(createAnswerChoiceAndAppend);
  console.log(parentDiv);
};

const verifyAnswer = () => {};
//here function to create div element for quiz content
const createQuizContainer = (quizQuestion) => {
  // create and append div for questions screen
  const divQuizContainer = document.createElement("div");
  divQuizContainer.setAttribute("id", "quiz - start");
  divQuizContainer.setAttribute(quizQuestions.correctAnswer);

  //create and append heading question
  const questionContent = document.createElement("h2");
  questionContent.textContent = quizQuestion.question;

  const answerChoices = createAnswerChoices(quizQuestion.answers);
  divQuizContainer.append(questionContent, answerChoices);
  divQuizContainer.addEventListener("click", verifyAnswer);
  return divQuizContainer;
};
const renderQuestion = () => {
  //append question container to the dom
  const questionContainer = createQuizContainer(quizQuestions);
  quizContainer.appendChild(questionContainer);
};

// // here declare build quiz function
// buildSubmitScoresForm = () => {
//   //create div container
//   const divForm = document.createElement("div");
//   divForm.setAttribute("class", "quiz - start");
//   //create heading question
//   const headingForm = document.createElement("h2");
//   divForm.appendChild(headingForm);
//   headingForm.setAttribute("class", "quiz - heading");
//   //create div info submit scores
//   const infoSubmit = document.createElement("div");
//   divForm.appendChild(infoSubmit);
//   infoSubmit.setAttribute("class", "quiz - text");
//   //create input name and score
//   const inputScore = document.createElement("input");
//   divForm.appendChild(inputScore);
//   // create submit scores button
//   const submitScoreButton = document.createElement("button");
//   divForm.appendChild(submitScoreButton);
// };

/* create countdown function*/
const startQuiz = () => {
  //remove start quiz div from the DOM
  quizContainer.removeChild(startQuizScreen);

  quizQuestions.forEach(renderQuestion);

  const callback = function () {
    if (timeValue >= 0) {
      timerQuiz.textContent = timeValue;
      timeValue -= 1;
    } else if (timeValue < 0) {
      clearInterval(callback);
    }
  };
  const timeAnswerQuestion = setInterval(callback, 1000);
};

// add event listener to start the quiz and timer
startQuizButton.addEventListener("click", startQuiz);

// when users presses right answer, change question, vAriable that stores

// add function to count the number of correct answers
// countTotalScore = () => {
//   counterSpan.textContent = count;
// };

// add event listener and function to check for the answer when answer button clicked
// buttonAnswer.addEventListener("click", verifyAnswer);
// const verifyAnswer = () => {
//   // here check if answer is correct, if yes counter incremented by one and if not display wrong message
// };
