import readlineSync from 'readline-sync';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}

export default function game () {
    console.log('Welcome to yhe Brain Games!');
    const result = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${result}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
    for (let i = 0; i <= 2; i += 1) {
        const num = getRandomIntInclusive(1,15)
        console.log(`${'Question:'}${num}`);
        const answer = readlineSync.question('Your answer: ');
        if ( num % 2 === 0 && answer === 'yes' || num % 2 !== 0 && answer === 'no' ) {
            console.log('Correct!');
        } else {
            console.log(`${"'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, "}${result}${'!'}`);
            return;
        };
    };
    console.log(`${'Congratulations'}${result}${'!'}`);
}