import { game } from '../index.js';
import { getRandomNumber, getRandomOperation } from '../utils.js';

const gcd = (a, b) => {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}

const gameSettings = {
	taskText: 'Find the greatest common divisor of given numbers.',
	generateIssue: () => {
		const firstOperand = getRandomNumber();
		const secondOperand = getRandomNumber();

		return {
            text: `${firstOperand} ${secondOperand}`,
            answer: gcd(firstOperand, secondOperand)
        };
	}
}

const gcdQuestion = () => {
	game.start(gameSettings);
}

export default gcdQuestion;
