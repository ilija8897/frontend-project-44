import { game } from '../index.js';
import { getRandomNumber, getRandomProgression } from '../utils.js';

const gameSettings = {
	taskText: 'What number is missing in the progression?',
	generateIssue: () => {
        const step = getRandomNumber(1, 10);
        const randomProgression = getRandomProgression(step);
        
        const hideNumberID = getRandomNumber(0, randomProgression.length - 1);
        const answer = randomProgression[hideNumberID];
        randomProgression[hideNumberID] = '..';

		return {
            text: randomProgression.join(' '),
            answer: answer
        };
	}
};

const progressionQuestion = () => {
	game.start(gameSettings);
};

export default progressionQuestion;
