import startGame from '../index.js';
import getRandomNumber from '../utils/get-random-number.js';

const OPERATIONS = ['+', '-', '*'];

function getRandomOperation(firstNum, secondNum, operationID) {
  switch (operationID) {
    case OPERATIONS[0]:
      return () => ({
        text: `${firstNum} + ${secondNum}`,
        answer: parseInt(firstNum, 10) + parseInt(secondNum, 10),
      });
    case OPERATIONS[1]:
      return () => ({
        text: `${firstNum} - ${secondNum}`,
        answer: parseInt(firstNum, 10) - parseInt(secondNum, 10),
      });
    case OPERATIONS[2]:
      return () => ({
        text: `${firstNum} * ${secondNum}`,
        answer: parseInt(firstNum, 10) * parseInt(secondNum, 10),
      });
    default:
      throw new Error('Wrong operationID!');
  }
}

const getOperationID = () => OPERATIONS[Math.floor(Math.random() * OPERATIONS.length)];

const gameSettings = {
  taskText: 'What is the result of the expression?',
  generateIssue: () => {
    const firstOperand = getRandomNumber();
    const secondOperand = getRandomNumber();
    const operationID = getOperationID();
    const randomOperation = getRandomOperation(firstOperand, secondOperand, operationID);

    return randomOperation();
  },
};

const calcQuestion = () => {
  startGame(gameSettings);
};

export default calcQuestion;
