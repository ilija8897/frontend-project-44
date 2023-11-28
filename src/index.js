import readLineSync from 'readline-sync';

import { NUMBER_OF_ROUNDS } from './constants.js';

export const game = {
    name: '',
    rightAnswers: 0,
    userAnswer: null,
    currentIssue: null,
    gameSettings: null,
    start(gameSettings) {
        this.gameSettings = gameSettings;
        this.greeting();
    },
    greeting() {
        console.log('Welcome to the Brain Games!');
        const userName = readLineSync.question('May I have your name? ');

        console.log(`Hello, ${userName}`);
        console.log(this.gameSettings.taskText);
        this.name = userName;
        this.question();
    },
    question() {
        const issue = this.gameSettings.generateIssue();
        console.log(`Question: ${issue.text}`);
        this.rightAnswer = issue.answer;
        this.userAnswer = readLineSync.question('Your answer: ');
        this.validate();
    },
    validate() {
        if (this.userAnswer === String(this.rightAnswer)) {
            console.log('Correct!');
            this.rightAnswers++;
            if (this.rightAnswers === NUMBER_OF_ROUNDS) console.log(`Congratulations, ${this.name}!`);
            if (this.rightAnswers < NUMBER_OF_ROUNDS) this.question();
        }
        if (this.userAnswer !== String(this.rightAnswer)) {
            console.log(
                `'${this.userAnswer}' is wrong answer ;(. 
                Correct answer was '${this.rightAnswer}'.
                Let's try again, ${this.userName}!`,
            );
        }
    },
}
