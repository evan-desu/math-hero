// Checks is user answer matches correct answer
export function checkAnswer(correctAnswer: number, userAnswer: number) {
    return userAnswer === correctAnswer;
}

// Generates a random number
export function generateNumber(limit: number = 10) {
    return Math.floor(Math.random() * limit + 1)
}

// Generates a random emoji with an count of 1 - 10
export function generateEmoji(limit: number = 10) {
    const emojis = {
        circles: '🟢', 
        hearts: '💙', 
        unicorns: '🦄', 
        baseballs: '⚾', 
        rockets: '🚀',
        cars: '🚗',
        rabbits: '🐰',
        ghosts: '👻',
        dolphins: '🐬',
        flowers: '🌼',
        cookies: '🍪',
    };

    let emojiArray = Object.values(emojis);
    let emojiNameArray = Object.keys(emojis);
    let index = generateNumber(emojiArray.length) - 1;
    let count = generateNumber(limit);
    let emoji = emojiArray[index];
    let emojiName = emojiNameArray[index];

    return { emoji, emojiName, count };
};

// Generates an array of mixed emojis
export function mixedCount(items: number, singleLimit: number, totalLimit: number):
    { emojis: { symbol: string; name: string; }[], counts: { [key: string]: number } } {
    const emojis = {
        circles: '🟢', 
        hearts: '💙', 
        unicorns: '🦄', 
        baseballs: '⚾', 
        rockets: '🚀',
        cars: '🚗',
        rabbits: '🐰',
        ghosts: '👻',
        dolphins: '🐬',
        flowers: '🌼',
        cookies: '🍪',
    };

    let emojiArray = Object.entries(emojis).map(([name, symbol]) => ({ name, symbol }));
    let selectedEmojis: { symbol: string; name: string }[] = [];

    for (let i = 0; i < items; i++) {
        let index = Math.floor(Math.random() * emojiArray.length);
        selectedEmojis.push(emojiArray[index]);
        emojiArray.splice(index, 1);
    }

    let result: { symbol: string; name: string }[] = [];
    for (let i = 0; i < totalLimit; i++) {
        let emojiObj = selectedEmojis[Math.floor(Math.random() * selectedEmojis.length)];
        let countOfEmoji = result.filter(e => e.symbol === emojiObj.symbol).length;
        if (countOfEmoji < singleLimit) {
            result.push(emojiObj);
        } else {
            i--;
        }
    }

    let counts: { [key: string]: number } = {};
    for (let emojiObj of selectedEmojis) {
        counts[emojiObj.name] = result.filter(e => e.symbol === emojiObj.symbol).length;
    }

    return { emojis: result, counts };
}

// Generates an addition problem
export function add(sumLimit: number) {
    let num1 = generateNumber(sumLimit);
    let num2 = generateNumber(sumLimit);

    while ((num1 + num2) > sumLimit) {
        num1 = generateNumber(sumLimit)
        num2 = generateNumber(sumLimit)
    }
    
    return {num1, num2, sum: num1 + num2}
}

// Generates an addition problem with three addends
export function addThreeNumbers(sumLimit: number) {
    let num1 = generateNumber(sumLimit - 5);
    let num2 = generateNumber(sumLimit - 5);
    let num3 = generateNumber(sumLimit - 5);

    while ((num1 + num2 + num3) > sumLimit) {
        num1 = generateNumber(sumLimit - 5);
        num2 = generateNumber(sumLimit - 5);
        num3 = generateNumber(sumLimit - 5);
    }

    return {
        num1, 
        num2, 
        num3, 
        sum: num1 + num2 + num3
    }
}

// Generates a subtraction problem
export function subtract(numLimit: number) {
    let num1 = generateNumber(numLimit);
    let num2 = generateNumber(numLimit);

    while (num1 < num2) {
        num1 = generateNumber(numLimit);
        num2 = generateNumber(numLimit);
    }
    
    if (numLimit > 10) {
        while (num1 < 11 || num1 < num2) {
            num1 = generateNumber(numLimit);
            num2 = generateNumber(numLimit);
        }
    }

    return {num1, num2, difference: num1 - num2};
};

// Generates a subtraction problem with three numbers
export function subtractWithThreeNums(numLimit: number, offset: number) {
    let num1 = generateNumber(numLimit);
    let num2 = generateNumber(numLimit - offset);
    let num3 = generateNumber(numLimit - offset);

    while (num1 < (num2 + num3)) {
        num1 = generateNumber(numLimit);
    }
    return {
        num1,
        num2,
        num3,
        diff: num1 - num2 - num3
    }
}

// Generates two random numbers and a matching comparison operator
export function compareTwoNumbers(numLimit: number, numRange: number) {
    const generateNumber = (limit: number) => {
        let num = 0;
        while (num === 0) {
            num = Math.floor(Math.random() * limit) + 1;
        }
        return num;
    }
    
    const baseNumber = generateNumber(numLimit);
    const offset = generateNumber(numRange + 1); // +1 to include the range limit

    const addOrSubtract = Math.random() > 0.5 ? 1 : -1;
    const secondNumber = baseNumber + addOrSubtract * offset;

    let num1 = generateNumber(numLimit);

    let num2: number;
    if (Math.random() > 0.5) {
        num2 = num1 + offset;
        if (num2 > numLimit) {
            num2 = num1 - offset;
        }
    } else {
        num2 = num1 - offset;
        if (num2 < 1) {
            num2 = num1 + offset;
        }
    }

    let differenceBetweenNums = () => {
        if (num1 > num2) {
            return ">";
        } else if (num1 < num2){
            return "<";
        } else {
            return "=";
        }
    }

    const correctAnswer = differenceBetweenNums();

    return {
        num1: num1,
        num2: num2,
        correctAnswer: correctAnswer
    }
}