#!/usr/bin/env node

import welcome from '../src/cli.js';
import evenQuestion from '../src/brain-even.js';

const userName = welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
evenQuestion(userName);
