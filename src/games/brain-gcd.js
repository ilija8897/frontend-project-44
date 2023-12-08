import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const gameSettings = {
  taskText: 'Find the greatest common divisor of given numbers.',
  generateIssue: () => {
    const firstOperand = getRandomNumber();
    const secondOperand = getRandomNumber();

    return {
      text: `${firstOperand} ${secondOperand}`,
      answer: gcd(firstOperand, secondOperand),
    };
  },
};

const gcdQuestion = () => {
  startGame(gameSettings);
};

export default gcdQuestion;
