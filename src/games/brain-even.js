import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameSettings = {
  taskText: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateIssue: () => {
    const randomNumber = getRandomNumber();
    return {
      text: randomNumber,
      answer: randomNumber % 2 === 0 ? 'yes' : 'no',
    };
  },
};

const evenQuestion = () => {
  startGame(gameSettings);
};

export default evenQuestion;
