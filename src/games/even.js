import { getRandom, basicOfGames } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNum = (num) => {
  let result = 1;
  if (num % 2 !== 0) {
    result = false;
  }
  return result;
};

const getGameRounds = () => {
  const randomInt = getRandom(100);
  const question = `${randomInt}`;
  const correctAnswer = isEvenNum(randomInt) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default function evenGame() {
  basicOfGames(description, getGameRounds);
}
