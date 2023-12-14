import startGame from '../index.js';
import getRandomNumber from '../utils/get-random-number.js';

const isPrimeNumber = (number) => {
  if (number < 2) return 'no';

  const result = 'yes';
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) return 'no';
  }
  return result;
};

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
