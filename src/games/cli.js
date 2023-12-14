import readLineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);
  return userName;
};

export default welcome;
