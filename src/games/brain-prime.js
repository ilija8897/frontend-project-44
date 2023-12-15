import startGame from '../index.js';
import getRandomNumber from '../utils/get-random-number.js';

const isPrimeNumber = (number) => {
  if (number < 2) return false;

  const result = true;
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) return false;
  }
  return result;
};

const gameSettings = {
  taskText: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateIssue: () => {
    const randomNumber = getRandomNumber();

    return {
      text: randomNumber,
      answer: isPrimeNumber(randomNumber) ? 'yes' : 'no',
    };
  },
};

const primeQuestion = () => {
  startGame(gameSettings);
};

export default primeQuestion;
