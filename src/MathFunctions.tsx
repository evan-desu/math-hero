export function checkAnswer(correctAnswer: number, userAnswer: number) {
    return userAnswer === correctAnswer;
}
export function generateNumber(limit: number = 10) {
    return Math.floor(Math.random() * limit + 1)
}

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

export function add(sumLimit: number) {
    let num1 = generateNumber(sumLimit);
    let num2 = generateNumber(sumLimit);

    while ((num1 + num2) > sumLimit) {
        num1 = generateNumber(sumLimit)
        num2 = generateNumber(sumLimit)
    }
    
    return {num1, num2, sum: num1 + num2}
}

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

export function compareTwoNumbers (numLimit: number, numRange: number) {
    const generateNumberWithinRange = (limit: number, range: number) => {
        return generateNumber(range) + (limit - range) - 1;
    }

    let num1 = generateNumberWithinRange(numLimit, numRange);
    let num2 = generateNumberWithinRange(numLimit, numRange);

    let answerChoices = {greaterThan: ">", lessThan: "<", equalTo: "="};

    let differenceBetweenNums = () => {
        if (num1 > num2) {
            return answerChoices.greaterThan;
        } else if (num1 < num2){
            return answerChoices.lessThan;
        } else {
            return answerChoices.equalTo;
        }
    }

    const correctAnswer = differenceBetweenNums();

    return {
        num1: num1,
        num2: num2,
        correctAnswer: correctAnswer
    }
}