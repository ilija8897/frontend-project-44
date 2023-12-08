import startGame from '../index.js';
import { getRandomNumber, isPrimeNumber } from '../utils.js';

const gameSettings = {
  taskText: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateIssue: () => {
    const randomNumber = getRandomNumber();

    return {
      text: randomNumber,
      answer: isPrimeNumber(randomNumber),
    };
  },
};

const primeQuestion = () => {
  startGame(gameSettings);
};

export default primeQuestion;
