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
    divForm.setAttribute("class", submit - score - form);
    headingForm.setAttribute("class", form - heading);
    infoSubmit.setAttribute("class", submit - score - text);
  }
}

//store my questions in arrays
// when users presses right answer, change question, vAriable that stores
