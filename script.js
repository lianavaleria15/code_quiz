// declare variables to target buttons in html file
const timerQuiz = document.getElementById("timer");
const quizContainer = document.getElementById("quiz-container");
const startQuizButton = document.getElementById("start-quiz-button");
const startQuizScreen = document.getElementById("quiz-start");
const header = document.getElementById("header-container");
const msgDiv = document.querySelector("#msg");

//initialize timer value and index value for array of questions
let timeValue = 5;
let score = 0;
let index = 0;

//store my questions in arrays
const quizQuestions = [
  {
    question: "How do you add an inline comment in Javascript?",
    answers: ["<!--comment-->", "//comment", "/*comment*/", "<comment>"],
    correctAnswer: "//comment",
  },

  {
    question: "What will the code return? Boolean(3<7)",
    answers: ["true", "SyntaxError", "false", "NaN"],
    correctAnswer: "true",
  },
  {
    question: "How do you link a javascript file to html?",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: "answer4",
  },
  {
    question: "Question4?",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: "answer3",
  },
  {
    question: "Question5?",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: "answer1",
  },
];
/* create countdown function*/

//create a function to display the answer choices
const createAnswerChoices = (answers) => {
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute("class", "answer-button");

  const createAnswerChoiceAndAppend = (answer) => {
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("data-answer", answer);
    button.setAttribute("class", "question-answer");
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
  const questionContainer = event.currentTarget;

  //verifies the answer given
  if (target.matches("button")) {
    const answer = target.getAttribute("data-answer");
    const correctAnswer = questionContainer.getAttribute("data-answer");
    console.log(target);
    console.log(questionContainer);
    if (answer === correctAnswer) {
      index += 1;
      // if no more questions stops the timer
      if (index >= quizQuestions.length) {
        score = timeValue;
        timeValue = 0;
      } else {
        //remove present question and move to the next
        quizContainer.removeChild(document.getElementById("quiz-start"));
        renderQuestion();
      }
      //remove current question and display next
    } else {
      alert("Not the right answer!");
      timeValue = timeValue - 5;
    }
  }
};

//here function to create div element for quiz content
const createQuizContainer = (quizQuestion) => {
  // console.log(quizQuestion);
  // create and append div for questions screen
  const divQuizContainer = document.createElement("div");
  divQuizContainer.setAttribute("id", "quiz-start");
  divQuizContainer.setAttribute("data-answer", quizQuestion.correctAnswer);

  //create and append heading question
  const questionContent = document.createElement("h2");
  questionContent.setAttribute("class", "question-heading");
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
  return renderQuestion;
};
const buildSubmitScoresForm = () => {
  //create div container
  const divForm = document.createElement("div");
  divForm.setAttribute("class", "form-container");

  //create heading question
  const headingForm = document.createElement("h2");
  headingForm.textContent = "Your score is" + "" + score;
  divForm.appendChild(headingForm);
  headingForm.setAttribute("class", "form-heading");

  //create div info submit scores
  const infoSubmit = document.createElement("div");
  infoSubmit.setAttribute("class", "form-text");
  infoSubmit.textContent =
    "Congratulations! You reached the end of the quiz. Please enter your 2 initials and score below.";
  divForm.appendChild(infoSubmit);
  infoSubmit.setAttribute("class", "form-text");

  //create input name and score
  const inputScore = document.createElement("input");
  inputScore.setAttribute("class", "input-score");
  inputScore.setAttribute("id", "initials-score");
  inputScore.placeholder = "Name initials and final score here";
  divForm.appendChild(inputScore);

  // create submit scores button
  const submitScoreButton = document.createElement("button");
  submitScoreButton.setAttribute("class", "submit-score-button");
  submitScoreButton.setAttribute("id", "submit-score");
  submitScoreButton.textContent = "Submit score";
  divForm.appendChild(submitScoreButton);
  return divForm;
};
const submitButton = document.getElementById("submit-score");

//create function to read from local storage
const renderHighScore = () => {
  //store input under a key name
  const highScore = localStorage.getItem("final-score");

  //if score was logged, display initials and score
  // if (highScore) {
  // }
};

// create function to display message when submit score button is clicked
const displayMessage = (type, message) => {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
};

// create function on submit score click
const OnSubmitScoreClick = (event) => {
  event.preventDefault();

  //get initials and score from input box
  const initialsAndScore = document.getElementById("initials-score").value;

  //call function display message if information was stored to local storage
  if (initialsAndScore === "") {
    displayMessage("error", "Input cannot be blank");
  } else {
    displayMessage("success", "Initials and score registered successfully");
  }
  //if input completed, store in local storage
  localStorage.setItem("highScore", initialsAndScore);
  //add event listener on submit form button
  submitButton.addEventListener("click", OnSubmitScoreClick);
};

renderHighScore();

// here declare function to start timer
const startTimer = () => {
  const callback = function () {
    if (timeValue >= 0) {
      timerQuiz.textContent = timeValue;
      timeValue -= 1;
    } else if (timeValue === 0 || index > 5) {
      clearInterval(timeAnswerQuestion);
      //replace quiz container with score forms
      buildSubmitScoresForm();
     
  };
  const timeAnswerQuestion = setInterval(callback, 1000);
};
const startQuiz = () => {
  //remove start quiz div from the DOM
  quizContainer.removeChild(startQuizScreen);
  renderQuestion();
  //start timer
  startTimer();
};
startQuizButton.addEventListener("click", startQuiz);
