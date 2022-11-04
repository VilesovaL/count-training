window.onload = function(){
  newExpression();
}
// 0 - сложение
// 1 - вычитание
// 2 - умножение
// 3 - деление
let mode = 0; // Режим
let answerId = 0; // Верный ответ
let level = 0; // Уровень
const chars = ["+", "−", "×", "÷"]; // Знаки


function getRandomNumber() {
  let x = Math.floor(Math.random() * (5+level)) + 1;
  if (Math.random() < 0.5) {
    x *= -1;
  }
  return x;
}

function changeMode(n) {
  mode = n;
  newExpression();
}

function newExpression() {
  first = getRandomNumber();
  second = getRandomNumber();
  if (mode === 0) {
    answer = first + second;
  }
  if (mode === 1) {
    answer = first - second;
  }
  if (mode === 2) {
    answer = first * second;
  }
  if (mode === 3) {
    answer = first % second;
    first = second * answer;
  }
  buttons = document.getElementsByClassName("answerBtn");
  answerId = Math.floor(Math.random() * 4);
  buttons[answerId].innerText = answer;
  let list = [];
  list.push(answer);
  for (let i = 0; i < 4; i++) {
    if (i != answerId) {
      do {
        randomAnswer = answer + Math.floor(Math.random() * (20)) - 10;
      }
      while (list.includes(randomAnswer));
      list.push(randomAnswer);
      buttons[i].innerText = randomAnswer;
    }
  }
  question = document.getElementById("question");
  question.innerText = first + " " + chars[mode] + " " + second + " =";
}

function checkAnswer(id) {
  if (id === answerId){
      level++;
      newExpression();
  }
  else {
    if (level > 0){
        level--;
    }
  }
  document.getElementById("level").innerText = level;
}
