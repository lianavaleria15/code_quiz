// declare variables to target buttons in html file
const timerQuiz = document.getElementById("timer");
const quizContainer = document.getElementById("quiz-container");
const startQuizButton = document.getElementById("start-quiz-button");
const startQuizScreen = document.getElementById("quiz-start");
const header = document.getElementById("header-container");
const bodyEl = document.body;

//initialize timer value and index value for array of questions
let timeValue = 5;
let index = 0;

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
/* create countdown function*/

//create a function to display the answer choices
const createAnswerChoices = (answers) => {
  const parentDiv = document.createElement("div");

  const createAnswerChoiceAndAppend = (answer) => {
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("data-answer", answer);
    //add text content to the button
    button.textContent = answer;
    //append answer buttons to the div
    div.appendChild(button);
    parentDiv.appendChild(div);
  };

  answers.forEach(createAnswerChoiceAndAppend);
  return parentDiv;
};

// function to verify answer choice
const verifyAnswer = (event) => {
  //add property to check when only clicked on the button
  const target = event.target;
  const currentTarget = event.currentTarget;

  //verifies the answer given
  if (target.matches("button")) {
    const answer = target.getAttribute("data-answer");
    const correctAnswer = currentTarget.getAttribute("data-answer");
    if (answer === correctAnswer) {
      index += 1;
      //remove current question and display next
    } else {
      alert("Not the right answer!");
    }
  }
};

//here function to create div element for quiz content
const createQuizContainer = (quizQuestion) => {
  console.log(quizQuestion);
  // create and append div for questions screen
  const divQuizContainer = document.createElement("div");
  divQuizContainer.setAttribute("id", "quiz - start");
  divQuizContainer.setAttribute("data-answer", quizQuestion.correctAnswer);

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
  if (index < quizQuestions.length) {
    const questionContainer = createQuizContainer(quizQuestions[index]);
    quizContainer.appendChild(questionContainer);
  }
  //ADDED NEW
  return renderQuestion;
};
const buildSubmitScoresForm = () => {
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
  return buildSubmitScoresForm;
};
// here declare function to start timer
const StartTimer = () => {
  const callback = function () {
    if (timeValue >= 0) {
      timerQuiz.textContent = timeValue;
      timeValue -= 1;
    } else if (timeValue < 0) {
      clearInterval(timeAnswerQuestion);
      //ADDED NEW
      quizContainer.removeChild(questionContainer);
      quizContainer.appendChild(buildSubmitScoresForm);
    }
  };
  const timeAnswerQuestion = setInterval(callback, 1000);
};
const startQuiz = () => {
  //remove start quiz div from the DOM
  quizContainer.removeChild(startQuizScreen);
  renderQuestion();
};
startQuizButton.addEventListener("click", startQuiz);
