import { generateKeySync } from "crypto";

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

    return {num1, num2, difference: num1 - num2}
}

export function checkAnswer(correctAnswer: number, userAnswer: number) {
    return userAnswer === correctAnswer;
}