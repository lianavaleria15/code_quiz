const goBackButton = document.getElementById("go-back");
const clearHighScoresButton = document.getElementById("clear-highscores");
const higherScoresList = document.getElementById("higherScoresList");
const goBack = () => {
  location.href = "./index.html";
};

// here function to clear local storage
const clearHighScores = () => {
  localStorage.clear();
  onLoad();
};

//initialise array to display highest scores
let highestScores = [];

//here add scores from local storage into html file TO DO (GET INTO HTML, TRANSLATE INTO JAVASCRIPT, take final div and append to the page)
const renderHighScores = () => {
  //sets higher scores list to an empty string
  higherScoresList.innerHTML = "";
  const createScoreItem = (highestScore, index) => {
    const highestScore = highestScores[i];

    //create a li item and set its value to the value of highest score from local storage
    const li = document.createElement("li");
    li.textContent = highestScore;
    li.setAttribute("data-index", index);
    higherScoresList.appendChild(li);
  };
  highestScores.forEach(createScoreItem);
};

//function to read from local storage and store in a declared variable
const getFromLocalStorage = () => {
  // checks if there is anything in local storage with the value of highest-score
  const storedHighScores = localStorage.getItem("highest-score");
  if (storedHighScores !== null) {
    highestScores.push(storedHighScores);
  }
  renderHighScores();
};

const init = () => {
  //
  const higherScore = localStorage.getItem("highest-score");
  renderHighScores();
};

// here function to load scores
const onLoad = () => {
  const highScores = getFromLocalStorage();
  renderHighScores(highScores);
};

//event listeners when buttons are clicked
goBackButton.addEventListener("click", goBack);
clearHighScoresButton.addEventListener("click", clearHighScores);
window.addEventListener("load", onLoad);
