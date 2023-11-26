import readLineSync from 'readline-sync';

let rightAnswers = 0;

const getRandomNumber = () => (Math.random() * 100).toFixed();

const isPositiveAnswer = (answer) => answer === 'yes';

const correctHandler = () => {
	console.log('Correct!');
	rightAnswers++;
}

const incorrectHandler = (answer, userName) => {
	console.log(
		`'${answer}' is wrong answer ;(. Correct answer was '${isPositiveAnswer(answer) ? 'no' : 'yes'}'.
		Let's try again, ${userName}!`,
	);
}

const returnResult = (answer, isEven) => {
	switch (true) {
		case (isPositiveAnswer(answer) && isEven):
		case (!isPositiveAnswer(answer) && !isEven):
			return true;
		case (!isPositiveAnswer(answer) && isEven):
		case (isPositiveAnswer(answer) && !isEven):
			return false;
		default:
			return false
	}
}

const answerHandler = (answer, number, userName) => {
	const isIncorrectAnswer = answer !== 'yes' && answer !== 'no';

	const isEven = number % 2 === 0;
	if (isIncorrectAnswer) {
		console.log(
			`Is wrong answer ;(.
            Let's try again, ${userName}!`,
		);
		return false;
	}
	if (isPositiveAnswer(answer)) {
		if (isEven) correctHandler();
		if (!isEven) incorrectHandler(answer, userName);
	}
	if (!isPositiveAnswer(answer)) {
		if (!isEven) correctHandler();
		if (isEven) incorrectHandler(answer, userName);
	}

	return returnResult(answer, isEven);
};

const evenQuestion = (userName) => {
	const number = getRandomNumber();
	console.log(`Question: ${number}`);

	const userAnswer = readLineSync.question('userAnswer: ');

	const answerIsTrue = answerHandler(userAnswer, number, userName);
	if (rightAnswers === 3) console.log(`Congratulations, ${userName}!`);
	if (answerIsTrue && rightAnswers < 3) evenQuestion(userName);
};

export default evenQuestion;
