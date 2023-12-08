import readLineSync from 'readline-sync';

import { NUMBER_OF_ROUNDS } from './constants.js';

const gameData = {
  name: '',
  rightAnswers: 0,
  userAnswer: null,
  currentIssue: null,
  gameSettings: null,
  isFail: false,
};

function validate() {
  if (gameData.userAnswer === String(gameData.rightAnswer)) {
    console.log('Correct!');
    gameData.rightAnswers += 1;
    if (gameData.rightAnswers === NUMBER_OF_ROUNDS) console.log(`Congratulations, ${gameData.name}!`);
  }
  if (gameData.userAnswer !== String(gameData.rightAnswer)) {
    if (!gameData.isFail) {
      console.log(
        `'${gameData.userAnswer}' is wrong answer ;(. 
            Correct answer was '${gameData.rightAnswer}'.
            Let's try again, ${gameData.name}!`,
      );
    }
    gameData.isFail = true;
  }
}

function question() {
  const issue = gameData.gameSettings.generateIssue();
  console.log(`Question: ${issue.text}`);
  gameData.rightAnswer = issue.answer;
  gameData.userAnswer = readLineSync.question('Your answer: ');
  validate();
}

function greeting() {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);
  console.log(gameData.gameSettings.taskText);
  gameData.name = userName;
}

function start(gameSettings) {
  gameData.gameSettings = gameSettings;
  greeting();
  while (gameData.rightAnswers < NUMBER_OF_ROUNDS && !gameData.isFail) question();
}

export default start;
