import startGame from '../index.js';
import getRandomNumber from '../utils/get-random-number.js';

const isEven = (number) => number % 2 === 0;

const gameSettings = {
  taskText: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateIssue: () => {
    const randomNumber = getRandomNumber();
    return {
      text: randomNumber,
      answer: isEven(randomNumber) ? 'yes' : 'no',
    };
  },
};

const evenQuestion = () => {
  startGame(gameSettings);
};

export default evenQuestion;
