// declare variables to target buttons in html file
const timerQuiz = document.getElementById("timer");
const startQuizButton = document.getElementById("start_quiz_button");
const startQuizScreen = document.getElementById("quiz-start");
const header = document.getElementById("header-container");

//initialize counter value
let timeValue = 5;

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
      document.body.insertBefore(newForm);
    }
  };
  // function executed every time a button is clicked
  const timeAnswerQuestion = setInterval(callback, 1000);
}

//here declare function to create and append form
function createAndAppendForm() {
  const bodyEl = document.body;
  //create div
  const divForm = document.createElement("div");
  //create h4
  const headingForm = document.createElement("h4");
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
}

// createAndAppendForm() => {
const newForm = document.createElement("div");
newForm.appendChild(body);
// add new heading
const formHeading = document.createElement("newForm");

//store my questions in arrays
// when users presses right answer, change question, vAriable that stores
