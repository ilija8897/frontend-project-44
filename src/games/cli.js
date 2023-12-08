import readLineSync from 'readline-sync';

const welcome = () => {
  const userName = readLineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);
  return userName;
};

export default welcome;
