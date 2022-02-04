//Hi Everyone
var readlineSync = require("readline-sync");

var questions = [{
  question: "\n1.What house at Hogwarts does Harry belong to?\nA.Hufflepuff   B.Griffindor   C.Ravenclaw   D.Slitherin\nAnswer : ",
  answer: "B"},
{
  question: "\n2.What position does Harry play on his Quidditch team?\nA.Bludger   B.Chaser   C.Seeker   D.Keeper\nAnswer : ",
  answer: "C"},
{
  question: "\n3.What does the Imperius Curse do?\nA.Kills   B.Tortures   C.Transforms   D.Controls\nAnswer : ",
  answer: "D"},
{
  question: "\n4.Who poses as Mad-Eye Moody, Harry's 4th year Defense Against the Dark Arts professor?\nA.Barty Crouch Jr.   B.Voldemort   C.Sirius Black   D.Peter Pettigrew\nAnswer : ",
  answer: "A"},
{
  question: "\n5.Who kills Professor Dumbledore?\nA.Bellatrix Lestrange   B.Draco Malfoy   C.Fenrir Greyback   D.Severus Snape\nAnswer : ",
  answer: "D"},
{
  question: "\n6.How does Harry catch his first snitch?\nA.In his Hat   B.With his Feet   C.In his Mouth   D.With his Hand\nAnswer : ",
  answer: "C"},
{
  question: "\n7.Before his second year at Hogwarts, how do the Weasley's save Harry from the Dursley's house?\nA.Portkey   B.Flying Car   C.Broom   D.Floo Powder\nAnswer : ",
  answer: "B"},
{
  question: "\n8.What magical talent does Harry share with Voldemort?\nA.Animagus   B.Parselmouth   C.Auror   D.Baldness;)\nAnswer : ",
  answer: "B"},
{
  question: "\n9.According to the Sorting Hat what qualities does Ravenclaw possess?\nA.Patience & Loyalty   B.Cunning & Deceit   C.Wit & Learning   D.Daring & Nerve\nAnswer : ",
  answer: "C"},
{
  question: "\n10.What is Harry's Patronus?\nA.Unicorn   B.Owl   C.Rabbit   D.Stag\nAnswer : ",
  answer: "D"},
];

var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are Right!");
    score++;
  } 
  else {
    console.log("You are Wrong!");
  }
}

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + "\nLet's see if you are a Potterhead!\nNOTE: Only Enter the Option Code");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("\nWe finally come to the end of this Gameshow...\nAnd your final Score is : ", score + "/10");
  if(score === 10)
    console.log("\nWOW! You are a Master Potterhead! Congratulations!!!");
  else if(score > 6)
    console.log("\nSo I declare you a Potterhead! Congratulations!");
  else
    console.log("\nI'm sorry but you are not a Potterhead :(\nTry again soon!");
}

welcome();
game();
showScores();