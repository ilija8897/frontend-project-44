export const getRandomNumber = () => (Math.random() * 100).toFixed();

export const getRandomOperation = (operations) => (operations[Math.floor(Math.random() * operations.length)]);
