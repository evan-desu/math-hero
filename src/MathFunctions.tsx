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
        stars: '⭐',
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
    { emojis: string[], counts: { [key: string]: number} } {
    const emojis = {
        circles: '🟢', 
        hearts: '💙', 
        unicorns: '🦄', 
        baseballs: '⚾', 
        rockets: '🚀',
        stars: '⭐',
        cars: '🚗',
        rabbits: '🐰',
        ghosts: '👻',
        dolphins: '🐬',
        flowers: '🌼',
        cookies: '🍪',
    };

    // items = generateNumber(items);
    // singleLimit = generateNumber(singleLimit) + 3;
    // totalLimit = generateNumber(totalLimit);

    let emojiArray = Object.values(emojis);
    let selectedEmojis: string[] = [];

    for (let i = 0; i < items; i++) {
        let index = generateNumber(emojiArray.length) - 1;
        selectedEmojis.push(emojiArray[index]);
        emojiArray.splice(index, 1);
    }

    let result: string[] = [];
    for (let i = 0; i < totalLimit; i++) {
        let emoji = selectedEmojis[i % items];
        let countOfEmoji = result.filter(e => e === emoji).length;
        if (countOfEmoji < singleLimit) {
            result.push(emoji);
        } else {
            for (let j = 0; j < selectedEmojis.length; j++) {
                let alternativeEmoji = selectedEmojis[j];
                let countOfAlternativeEmoji = result.filter(e => e === alternativeEmoji).length;
                if (countOfAlternativeEmoji < singleLimit) {
                    result.push(alternativeEmoji);
                    break;
                }
            }
        }
    }
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]]
    }

    let counts: { [key: string]: number } = {};
    for (let emoji of selectedEmojis) {
        counts[emoji] = result.filter(e => e === emoji).length;
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
            num1 = generateNumber(numLimit)
            num2 = generateNumber(numLimit)
        }
    }

    return {num1, num2, difference: num1 - num2}
}

export function checkAnswer(correctAnswer: number, userAnswer: number) {
    return userAnswer === correctAnswer;
}