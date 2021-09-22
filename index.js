var readlineSync  = require('readline-sync');
var chalk = require('chalk');

var score = 0;

var highScores = [
  {
    name: "Deepak",
    score: 5,
  },

  {
    name: "Rohan",
    score: 3,
  },
]

var questions = [{
  question: "Where do I Live? ",
  answer: "Mumbai"
},{
  question: "Where do I work? ",
  answer: "TCS"
}, {
  question: "Which programming language do I prefer? ",
  answer: "Python"
}, {
  question: "Which anime do I like? ",
  answer: "Dragon Ball Z"
}, {
  question: "Which cuisine do I prefer? ",
  answer: "Italian"
}
]

function welcome(){
  var userName = readlineSync.question("What's your name? ")
  console.log(chalk.blue("Hey, " + userName))
  console.log("Welcome to DO YOU KNOW Deepak!")
  console.log("Lets start the game!!")
}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right Answer 😄");
    score ++;
  } else {
    console.log("Wrong Answer 😔");
  }

  console.log("current score: ", score);
  console.log("--------------");
}

// questions and answers
function game() {
  for(var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

// displaying scores
// display score
function showScore(){
  console.log(chalk.underline.bold("Hey your score is: ", score))
  console.log("Check out the high scores, if you want to be there ping me.");
  highScores.map(score => console.log(score.name, " : ", score.score))
  console.log("Enjoy!")
}

welcome();
game();
showScores();
