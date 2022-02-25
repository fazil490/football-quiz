var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;

var highScore = {
  name : "Fazil",
  score : 7
}

var userName = readlineSync.question("May I know your name : ");
console.log(chalk.blue.bold("Hello " + userName.toUpperCase() + " 👋"));
console.log(chalk.blue.bold("Welcome to Football Quiz!"));
console.log("------------------");

function play(question, answerOption, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answerOption.toUpperCase()){
    console.log("Your answer is : " + answer);
    console.log(chalk.bgGreen("You are right!"));
    score++;
    console.log(chalk.green("Current score: " + score));
  }else if(userAnswer.toUpperCase() === answer.toUpperCase()){
      console.log(chalk.bgGreen("You are right!"));
      score++;
      console.log(chalk.green("Current score: " + score));
    } 
    else {
      console.log(chalk.bgRed("You are wrong!"));
      console.log(chalk.green("Correct answer is  " + answerOption + " : " + answer));
      console.log(chalk.red("Currnet score: " + score));
      }

  console.log("------------------");
}



var questionOne = {
  question : `Which club have won most number of champions league titles? 
  a : FC Barcelona
  b : AC Milan
  c : Real Madrid
  d : Liverpool
  Enter the Answer/Option : `,
  answerOption : "c",
  answer : "Real Madrid"
}

var questionTwo = {
  question : `Which club have won most number of premier league titles?
  a : Manchester City
  b : Manchester united
  c : Liverpool
  d : Chelsea
  Enter the Answer/Option : `,
  answerOption : "b",
  answer : "Manchester united"
}

var questionThree = {
  question : `Who is the champions league top goal sccorer of all time?
  a : Lionel Messi
  b : Cristiano Ronaldo
  c : Robert Lewandoski
  d : Karim Benzema
  Enter the Answer/Option : `,
  answerOption : "b",
  answer : "Cristiano Ronaldo"
} 

var questionFour = {
  question : `Who have scored most Hat-tricks in football history?
  a : Cristiano Ronaldo
  b : Pele
  c : Lionel Messi
  d : Wayne Ronney
  Enter the Answer/Option : `,
  answerOption : "b",
  answer : "Pele"
} 

var questionFive = {
  question : `Who have won most number of Ballon d'Or awards?
  a : Cristiano Ronaldo
  b : Zinedine Zidane
  c : Lionel Messi
  d : Luka Modric
  Enter the Answer/Option : `,
  answerOption : "c",
  answer : "Lionel Messi"
} 

var questionSix = {
  question : `Who is the all time top goal scorer of Manchester United?
  a : Cristiano Ronaldo
  b : David Bechkam
  c : Ryan Gibbs
  d : Wayne Ronney
  Enter the Answer/Option : `,
  answerOption : "c",
  answer : "Wayne Ronney"
}

var questionSix = {
  question : `Top goal scorer of Manchester United last season (2020/2021) is?
  a : Bruno Fernandes
  b : Marcus Rashford
  c : Mason Greenwood
  d : Anthony Martial
  Enter the Answer/Option : `,
  answerOption : "a",
  answer : "Bruno Fernandes"
}

var questionSeven = {
  question : `Golden boot winner of premier league season(2020/2021) is?
  a : Mohamed Salah	
  b : Bruno Fernandes
  c : Son Heung-min	
  d : Harry Kane
  Enter the Answer/Option : `,
  answerOption : "a",
  answer : "Mohamed Salah"
}


var questions = [questionOne, questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,];
for(i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answerOption, currentQuestion.answer)
}

if(score === 7){
  console.log(chalk.bgCyan("YAY! Your final score is : " + score));
  console.log("                                ");
  console.log(chalk.bgCyan("You have levelled the highscore 🔥 "));
} else {
  console.log(chalk.bgCyan("Your final score is : " + score));
  console.log("                                ");
  console.log(chalk.bgYellow("Check out the highscore"));
  console.log(chalk.magenta("Name : " + highScore.name));
  console.log(chalk.magenta("Score : " + highScore.score));
  console.log(chalk.bgYellow("If you beat this this highscore 👆 send me a screenshot"));
}



