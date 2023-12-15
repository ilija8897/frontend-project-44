import readLineSync from 'readline-sync';

import { NUMBER_OF_ROUNDS } from './constants.js';

function start({ taskText, generateIssue }) {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);
  console.log(taskText);

  for (let i = 1; i <= NUMBER_OF_ROUNDS; i += 1) {
    const { text, answer } = generateIssue();

    console.log(`Question: ${text}`);
    const userAnswer = readLineSync.question('Your answer: ');

    if (userAnswer !== String(answer)) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. 
            Correct answer was '${answer}'.
            Let's try again, ${userName}!`,
      );
      break;
    } else {
      console.log('Correct!');
    }
    if (i === NUMBER_OF_ROUNDS) console.log(`Congratulations, ${userName}!`);
  }
}

export default start;
