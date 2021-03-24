const goBackButton = document.getElementById("go-back");
const clearHighScoresButton = document.getElementById("clear-highscores");

const goBack = () => {
  location.href = "./index.html";
};
// here function to clear local storage
const clearHighScores = () => {
  localStorage.clear();
  onLoad();
};
//function to read from local storage and store in a declared variable
const getFromLocalStorage = () => {
  const highScores = localStorage.getItem("highScores");
  if (highScores) {
    return highScores;
  } else {
    return [];
  }
};
//here add scores from local storage into html file TO DO (GET INTO HTML, TRANSLATE INTO JAVASCRIPT, take final div and append to the page)
const renderHighScores = (highScores) => {
  if (highScores) {
    console.log("empty"); //display empty table
  } else {
    console.log("create table");
  }
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
