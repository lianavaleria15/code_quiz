# Code Quiz

## Description

In this project I create a timed code quiz verifying Javascript knowledge. The quiz consists of 5 questions. The rules of the quiz are the following:

1. When a wrong answer is given, the time left will be deducted with 5 seconds.
2. The final score consists of the total amount of time left after all questions have been answered.
3. And the end of the quiz, the user is presented with a submit score form and the chance to visit the highest scores on a separate html page.

## How I build the app

### HTML layout

- I created two separate html pages: first contains the start quiz container with information about the quiz and a start button; the second page retrieves the highest scores from local storage. Both html pages are dynamically built with the help of Javascript.

### CSS layout

- styling properties here were used at a minimal level: margin, size, and flex box
- I will come back later to change the code to make it more visually appealing

### JAVASCRIPT layout

- add event listener on start-quiz button and created login when button clicked, the star container is replaced by question container
- add logic to make the answer button responsive and to check if the answer pressed is correct (change question) or wrong (keep question, deduct time)
- add logic if all questions are answered or time reaches zero - a end quiz container with a submit score form should appear
- add event listener on submit button, which takes the user on highest scores page and stores the score in the local storage
- for the highest score page, add event listener to return to start quiz -if user wants to repeat the game; or clear scores

## Link deployed app

Click [here](https://lianavaleria15.github.io/code_quiz/) to view the deployed application.

## Screenshots
