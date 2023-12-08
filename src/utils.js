export const getRandomOperation = (operations) => (
  (operations[Math.floor(Math.random() * operations.length)])
);

export const getRandomNumber = (min = 1, max = 99) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

export const getRandomProgression = (step, min = 5, max = 10) => {
  const arrayLength = getRandomNumber(min, max);

  const randomArray = [];

  while (randomArray.length < arrayLength) {
    if (randomArray.length === 0) {
      randomArray.push(getRandomNumber());
    }

    randomArray.push(randomArray[randomArray.length - 1] + step);
  }

  return randomArray;
};

export const isPrimeNumber = (number) => {
  if (number < 2) return 'no';

  const result = 'yes';
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) return 'no';
  }
  return result;
};
