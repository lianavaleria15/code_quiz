// declare variables to target buttons in html file
const timerQuiz = document.getElementById("timer");
const quizContainer = document.getElementById("quiz-container");
const startQuizButton = document.getElementById("start-quiz-button");
const startQuizScreen = document.getElementById("quiz-start");
const header = document.getElementById("header-container");

//initialize timer value and index value for array of questions
let timeValue = 60;
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
    question: " What is the syntax to link a javascript file to html?",
    answers: [
      "<javascript></javascript>",
      "<java></java>",
      "<script java></script java>",
      "<script></script>",
    ],
    correctAnswer: "<script></script>",
  },
  {
    question: "What is the correct syntax to declare a Javascript array?",
    answers: [
      "const abc = {'x', 'y', 'z'}",
      "array abc = ('x', 'y', 'z')",
      "const abc = ['x', 'y', 'z']",
      "array abc = {'x', 'y', 'z'}",
    ],
    correctAnswer: "const abc = ['x', 'y', 'z']",
  },
  {
    question: "How does a FOR loop start?",
    answers: [
      "for (i=0; i<=5; i++)",
      "for i=1 to 5",
      "for (i=0 or i<=5",
      "for i <=5; i++",
    ],
    correctAnswer: "for (i=0; i<=5; i++)",
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

const EndQuiz = () => {
  //create div container
  quizContainer.children[0].remove();
  const divForm = document.createElement("div");
  divForm.setAttribute("class", "form-container");
  quizContainer.appendChild(divForm);

  //create heading question
  const headingForm = document.createElement("h2");
  headingForm.textContent = "Your score is " + score;
  divForm.appendChild(headingForm);
  headingForm.setAttribute("class", "form-heading");

  //create div info submit scores
  const infoSubmit = document.createElement("div");
  infoSubmit.setAttribute("class", "form-text");
  infoSubmit.textContent =
    "Congratulations! Please enter your 2 initials below.";
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

  const submitButton = document.getElementById("submit-score");

  // create function to read values from global memory and add in local storage
  const onSubmitScoreClick = (event) => {
    event.preventDefault();

    //store initials and score from input box in the local storage
    const initials = inputScore.value;
    const highestscore = score;
    const highestScoreObject = {
      initials: initials,
      highestscore: highestscore,
    };

    // transform object to a string and add to local storage
    let highestScoreObjectString = JSON.stringify(highestScoreObject);
    localStorage.setItem("highest-score", highestScoreObjectString);

    // add the next highest score if higher than the value already stored
    if (score > highestScoreObject) {
      localStorage.setItem("highest-score", score);
    }
    //add link to navigate to highscore page
    window.location.href = "./high-scores.html";
  };
  //move this on at the end of the function
  submitButton.addEventListener("click", onSubmitScoreClick);
};

// here declare function to start timer
const startTimer = () => {
  const callback = function () {
    // if timer
    if (timeValue > 0) {
      timerQuiz.textContent = timeValue;
      timeValue -= 1;
    }
    //if timer is zero end quiz
    if (timeValue === 0 || index > length.quizQuestions) {
      EndQuiz();
      clearInterval(timeAnswerQuestion);
    }
  };
  const timeAnswerQuestion = setInterval(callback, 1000);
};
//here start quiz function
const startQuiz = () => {
  //remove start quiz div from the DOM
  quizContainer.removeChild(startQuizScreen);
  renderQuestion();
  //start timer
  timerQuiz.textContent = timer;
  startTimer();
};

startQuizButton.addEventListener("click", startQuiz);
