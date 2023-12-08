import startGame from '../index.js';
import { getRandomNumber, getRandomOperation } from '../utils.js';

const operations = [
  (a, b) => ({
    text: `${a} + ${b}`,
    answer: parseInt(a, 10) + parseInt(b, 10),
  }),
  (a, b) => ({
    text: `${a} - ${b}`,
    answer: parseInt(a, 10) - parseInt(b, 10),
  }),
  (a, b) => ({
    text: `${a} * ${b}`,
    answer: parseInt(a, 10) * parseInt(b, 10),
  }),
];

const gameSettings = {
  taskText: 'What is the result of the expression?',
  generateIssue: () => {
    const firstOperand = getRandomNumber();
    const secondOperand = getRandomNumber();
    const operation = getRandomOperation(operations);

    return operation(firstOperand, secondOperand);
  },
};

const calcQuestion = () => {
  startGame(gameSettings);
};

export default calcQuestion;
