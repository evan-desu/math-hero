export function generateNumber(limit: number = 10) {
    return Math.floor(Math.random() * limit + 1)
}

export function generateEmoji() {
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
    let emojiName = Object.keys(emojis)
    let index = generateNumber(emojiArray.length)
    return [emojiName[index], emojiArray[index]]
}

export function count(items: number, singleLimit: number, totalLimit: number):
    { emojis: string[], total: number } {
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
    return {emojis: result, total: result.length};
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