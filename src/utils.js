export const getRandomOperation = (operations) => (operations[Math.floor(Math.random() * operations.length)]);

export const getRandomNumber = (min = 1, max = 99) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomProgression = (step, min = 5, max = 10) => {
    const arrayLength = getRandomNumber(min, max);

    const randomArray = [];

    while(randomArray.length < arrayLength) {
        if (randomArray.length === 0) {
            randomArray.push(getRandomNumber());
        }

        randomArray.push(randomArray[randomArray.length - 1] + step);
    };

    return randomArray;
};