import startGame from '../index.js';
import getRandomNumber from '../utils/get-random-number.js';

const getRandomProgression = (step, firstNum, arrayLength) => {
  const randomArray = [firstNum];

  for (let i = randomArray.length; i < arrayLength; i += 1) {
    randomArray.push(randomArray[randomArray.length - 1] + step);
  }

  return randomArray;
};

const gameSettings = {
  taskText: 'What number is missing in the progression?',
  generateIssue: () => {
    const step = getRandomNumber(1, 10);
    const arrayLength = getRandomNumber(5, 10);
    const firstNum = getRandomNumber();
    const randomProgression = getRandomProgression(step, firstNum, arrayLength);

    const hideNumberID = getRandomNumber(0, randomProgression.length - 1);
    const answer = randomProgression[hideNumberID];
    randomProgression[hideNumberID] = '..';

    return {
      text: randomProgression.join(' '),
      answer,
    };
  },
};

const progressionQuestion = () => {
  startGame(gameSettings);
};

export default progressionQuestion;
