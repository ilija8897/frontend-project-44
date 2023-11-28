import { game } from '../index.js';
import { getRandomNumber, getRandomOperation } from '../utils.js';

const operations = [
	(a, b) => ({
		text: `${a} + ${b}`,
		answer: parseInt(a) + parseInt(b),
	}),
	(a, b) => ({
		text: `${a} - ${b}`,
		answer: parseInt(a) - parseInt(b),
	}),
	(a, b) => ({
		text: `${a} * ${b}`,
		answer: parseInt(a) * parseInt(b),
	}),
]

const gameSettings = {
	taskText: 'What is the result of the expression?',
	generateIssue: () => {
		const firstOperand = getRandomNumber();
		const secondOperand = getRandomNumber();
		const operation = getRandomOperation(operations);

		return operation(firstOperand, secondOperand);
	}
}

const calcQuestion = () => {
	game.start(gameSettings);
}

export default calcQuestion;