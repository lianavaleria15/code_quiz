// declare variables to target buttons in html file
// const startQuizButton = document.getElementById("start-quiz-button");
const timerQuiz = document.getElementById("timer");
const startQuizButton = document.getElementById("start_quiz_button");

//initialise counter value
let timeValue = 60;

/* create countdown function*/
function startQuiz() {
  const callback = function () {
    if (timeValue >= 0) {
      timerQuiz.textContent = timeValue;
      timeValue -= 1;
    }
  };
  // function executed every time a button is clicked
  const timeAnswerQuestion = setInterval(callback, 1000);
}

// add event listener to start the quiz and timer
startQuizButton.addEventListener("click", startQuiz);
//store my questions in arrays
// when users presses right answer, change question, vAriable that stores
