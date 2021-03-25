// declare variables to target buttons in html file
const timerQuiz = document.getElementById("timer");
const startQuizButton = document.getElementById("start-quiz-button");
const startQuizScreen = document.getElementById("quiz-start");
const header = document.getElementById("header-container");
const bodyEl = document.body;

// variable that targets the button element with answer
const buttonAnswer = document.getElementsByClassName("button-answer");

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

//here function to create div element for quiz content
const createQuizContainer = (quizQuestions) => {
  // create and append div for questions screen
  const divQuizContainer = document.createElement("div");
  divQuizContainer.setAttribute("id", "quiz - start");
  divQuizContainer.setAttribute("data-answer", quizQuestions.correctAnswer);

  //create and append heading question
  const questionContent = document.createElement("h2");

  divQuizContainer.appendChild(questionContent);
  questionContent.setAttribute("class", quiz - heading);
  //create and append buttons for answers
  const answerButtonOne = document.createElement("button");
  divQuizContainer.appendChild(answerButtonOne);
  const answerButtonTwo = document.createElement("button");
  divQuizContainer.appendChild(answerButtonTwo);
  const answerButtonThree = document.createElement("button");
  divQuizContainer.appendChild(answerButtonThree);
  const answerButtonFour = document.createElement("button");
  divQuizContainer.appendChild(answerButtonFour);
  answerButtonOne,
    answerButtonTwo,
    answerButtonThree,
    answerButtonFour.setAttribute("class", answer - button);
  return createQuizContainer;
};

// here declare build quiz function
buildSubmitScoresForm = () => {
  //create div container
  const divForm = document.createElement("div");
  divForm.setAttribute("class", "quiz - start");
  //create heading question
  const headingForm = document.createElement("h2");
  divForm.appendChild(headingForm);
  headingForm.setAttribute("class", "quiz - heading");
  //create div info submit scores
  const infoSubmit = document.createElement("div");
  divForm.appendChild(infoSubmit);
  infoSubmit.setAttribute("class", "quiz - text");
  //create input name and score
  const inputScore = document.createElement("input");
  divForm.appendChild(inputScore);
  // create submit scores button
  const submitScoreButton = document.createElement("button");
  divForm.appendChild(submitScoreButton);
};

/* create countdown function*/
const startQuiz = () => {
  //here declare function to create and append form

  const callback = function () {
    if (timeValue >= 0) {
      timerQuiz.textContent = timeValue;
      timeValue -= 1;
    } else if (timeValue < 0) {
      clearInterval(callback);
      //remove start quiz div from the DOM
      startQuizScreen.remove();
      //append submit scores form div
      createAndAppendForm();
      // window.clearInterval();
    }
  };
  const timeAnswerQuestion = setInterval(callback, 1000);
};

// add event listener to start the quiz and timer
startQuizButton.addEventListener("click", startQuiz);

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
