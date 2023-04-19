//Refrences
let homePage = document.querySelector(".home-page");
let playBtn = document.querySelector(".btn-home-page-play");
let selectPage = document.querySelector(".hide-director");


//Refrences Quiz
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//when user click on play
playBtn.addEventListener("click", () => {
  homePage.style.display = "none";
  selectPage.style.display = "flex";
});




//Constants how much points they get if they answer correctly and how many questions
