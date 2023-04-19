//Variables for the home screen
let homePage = document.querySelector(".home-page");
let playBtn = document.querySelector(".btn-home-page-play");
let selectPage = document.querySelector(".hide-director");
//Variables for Director buttons
let stevenBtn = document.querySelector("#btn-director-ss");
let timBtn = document.querySelector("#btn-director-tb");
let alfredBtn = document.querySelector("#btn-director-ah");
let directorBtn = document.querySelector("director-btn");
let quizSection = document.querySelector(".hide-quiz");

//when user click on play add event listner
playBtn.addEventListener("click", () => {
  homePage.style.display = "none";
  selectPage.style.display = "flex";
});

// Steven Spilberg Quiz questions using objects
let directorChoose = [
  [
    {
      question:
        "What film did Steven Spilberg not want to make, but was contractually abliged to do so ?",
      choice1: "The Color Purple",
      choice2: "War Horse",
      choice3: "Jaws",
      choice4: "E.T",
      answer: 3,
    },

    {
      question:
        "Steven Spielberg Submitted Which Of His Films As A College Graduation Requirement?",

      choice1: "Schindler's List",
      hocice2: "Jurassic Park",
      choice3: "Saving Private Ryan",
      choice4: "Duel",
      answer: 1,
    },

    {
      question:
        "For what 1977 film did Spielberg receive his first Academy Award nomination for Best Director?",
      choice1: "Indiana Jones and the Temple of Doom",
      choice2: "Close Encounters of the Third Kind",
      choice3: "E.T",
      choice4: "Jaws",
      answer: 2,
    },

    {
      question:
        "Which of the movies directed by Spielberg won the most Academy Awards?",

      choice1: "Lincoln",
      choice2: "Schindler's List",
      choice3: "Catch me if you can",
      choice4: "Empire of the sun",
      answer: 2,
    },

    {
      question:
        "The set of which Spielberg project resulted in a helicopter crash that claimed two lives",
      choice1: "Twilight Zone",
      choice2: "Minority Report",
      choice3: "Catch me if you can",
      choice4: "Empire of the sun",
      answer: 1,
    },

    {
      question: "What learning disability does steven spielberg have",
      choice1: "ADHD",
      choice2: "Dyscalculia",
      choice3: "Dysgraphia",
      choice4: "Dyslexia",
      answer: 4,
    },

    {
      question:
        "How long did Spielberg take to shoot the D-Day scenes for Saving Private Ryan",
      choice1: "1 week",
      choice2: "10 weeks",
      choice3: "4 weeks",
      choice4: "3 days",
      answer: 3,
    },

    {
      question: "How many children does Steven Spielberg have",
      choice1: "1",
      choice2: "6",
      choice3: "10",
      choice4: "3",
      answer: 2,
    },

    {
      question:
        "Which sucessful book did Stevens Spilbergs production company buy the rights for ?",
      choice1: "IT",
      choice2: "Hunger Games",
      choice3: "Harry Potter",
      choice4: "The Thursday Murder Club",
      answer: 4,
    },

    {
      question: "What was the name of Spielberg's first romantic film ?",
      choice1: "The Post",
      choice2: "Always",
      choice3: "Amblin",
      choice4: "Hook",
      answer: 2,
    },
  ],

  // Tim Burton Quiz questions using objects
  [
    {
      question: "Who directed The Nightmare Before Christmas?",
      choice1: "Tim Burton",
      choice2: "Woody Allen",
      choice3: "Henry Selick",
      choice4: "Steven Spilberg",
      answer: 3,
    },

    {
      question:
        "What did Burton study while attending the California Institute of the Arts?",
      choice1: "Stop-motion animation",
      choice2: "Photography",
      choice3: "Sculpture",
      choice4: "Film",
      answer: 1,
    },

    {
      question:
        "What was the name of an animated short that help Burton land a job at Walt Disney Studios?",
      choice1: "The Hands of My Mother's Skeleton",
      choice2: "Splat of the Tomato Hurler",
      choice3: "Silence",
      choice4: "Stalk of the Celery Monster",
      answer: 4,
    },

    {
      question: "Which famous actor did date for 13 years ",
      choice1: "Jennifer Lawerance",
      choice2: "Cate Blancett",
      choice3: "Emma Stone",
      choice4: "Helena Bonham Carter",
      answer: 4,
    },

    {
      question:
        "Why did Warner Bros. hire a different director to handle Batman Forever?",
      choice1: "They thought Batman Returns was too scary",
      choice2: "The studio fell out with Tim",
      choice3: "Batman Returns was a flop",
      choice4: "Burton was too expensive.",
      answer: 1,
    },

    {
      question: "What inspired Burton to write The Nightmare Before Christmas?",
      choice1: "Too many drugs",
      choice2: "Disjointed holiday displays in local stores",
      choice3: "Recurring nightmares about the holiday season",
      choice4: "His love for Christmas",
      answer: 2,
    },

    {
      question:
        "Why did Burton quit his job as an animator at Walt Disney Studios?",
      choice1: "He had no health benefits.",
      choice2: "The pay was abysmal.",
      choice3: "He was bored out of his mind.",
      choice4: "He hated Disney",
      answer: 3,
    },

    {
      question:
        "For which film did Burton receive a best director award from the National Board of Review?",
      choice1: "Alice in Wonderland",
      choice2: "Sweeney Todd",
      choice3: "Frankenweenie",
      choice4: "Big Fish",
      answer: 2,
    },

    {
      question:
        "Which Burton movie features a young Miley Cyrus in her first film?",
      choice1: "Alice in Wonderland",
      choice2: "Sleepy Hollow",
      choice3: "Planet of the Apes",
      choice4: "Big Fish",
      answer: 4,
    },

    {
      question: "How many films have Burton and Johnny Depp collaborated on?",
      choice1: "8",
      choice2: "3",
      choice3: "5",
      choice4: "6",
      answer: 1,
    },
  ],

  // Alfred Hitchcock Quiz questions using objects
  [
    {
      question: "On how many films did Hitchcock serve as director?",
      choice1: "69",
      choice2: "47",
      choice3: "58",
      choice4: "74",
      answer: 1,
    },

    {
      question:
        "Which of the following Hitchcock films served as wartime propaganda?",
      choice1: "Secret Agent",
      choice2: "Watchtower Over Tomorrow",
      choice3: "The Man Who Knew Too Much",
      choice4: "The 39 Steps",
      answer: 2,
    },

    {
      question: "Why did Hitchcock try to buy all copies of the book Psycho?",
      choice1: "He hated author.",
      choice2: "He thought the screen play was better",
      choice3: "He didn't want the book to spoil the movie's plot.",
      choice4: "Liked burning them",
      answer: 3,
    },

    {
      question:
        "Why did Walt Disney reportedly refuse to let Hitchcock use Disneyland to film",
      choice1: "Hitchcock stole his wife.",
      choice2: "He was repulsed by Psycho.",
      choice3: "He had a years-long feud with Hitchcock.",
      choice4: "He was scared of Hitchcock",
      answer: 2,
    },

    {
      question:
        "What contributed heavily to the fact that The Short Night was never completed?",
      choice1: "Hitchcock's poor health",
      choice2: "A labor strike",
      choice3: "No money",
      choice4: "Downturn in the economy",
      answer: 1,
    },

    {
      question: "What was Hitchcock's first job in the film industry?",
      choice1: "He was a janitor.",
      choice2: "He drew film sets.",
      choice3: "He was a driver",
      choice4: "He was a actor",
      answer: 2,
    },

    {
      question:
        "Hitchcock was known for wearing which type of clothing on film sets?",
      choice1: "Full suits",
      choice2: "Top hats",
      choice3: "Sweatpants",
      choice4: "Jeans",
      answer: 1,
    },

    {
      question:
        "At Universal Studios theme park, Hitchcock provided narration for which ride?",
      choice1: "Space Mountain.",
      choice2: "E.T.",
      choice3: "Jaws",
      choice4: "The Mummy",
      answer: 3,
    },

    {
      question:
        "When he received an honorary Oscar award for lifetime achievement, what did Hitchcock say for his acceptance speech?",
      choice1: "Cheeers",
      choice2: "About damn time",
      choice3: "Good evening, so glad you recognized me.",
      choice4: "Thank you very much indeed",
      answer: 4,
    },

    {
      question: "In how many of his movies did Hitchcock appear?",
      choice1: "20",
      choice2: "39",
      choice3: "1",
      choice4: "5",
      answer: 2,
    },
  ],
];

//when user clicks on director add event listner so page changes
stevenBtn.addEventListener("click", () => {
  selectPage.style.display = "none";
  quizSection.style.display = "flex";
});

timBtn.addEventListener("click", () => {
  selectPage.style.display = "none";
  quizSection.style.display = "flex";
});

alfredBtn.addEventListener("click", () => {
  selectPage.style.display = "none";
  quizSection.style.display = "flex";
});

//variables
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
let directorChoosen;
let questionList;
let catogoryChoosen;
let questionSet;

// Director button event listners and function to run Quiz
function chooseDirector(event) {
  questionList = JSON.parse(JSON.stringify(directorChoose));
  switch (catogoryChoosen) {
    case "steven":
      questionSet = questionList[0];
      break;
    case "tim":
      questionSet = questionList[1];
      break;
    case "alfred":
      questionSet = questionList[2];
      break;
    default:
      alert("No valid category been chosen");
  }
}
