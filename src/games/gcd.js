import { getRandom, basicOfGames } from '../index.js';

const purposeOfGcdGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (randNum1, randNum2) => (!randNum2 ? randNum1 : getGcd(randNum2, randNum1 % randNum2));

function game () {
  const randNum1 = getRandom(100);
  const randNum2 = getRandom(10);
  const question = `${randNum1} ${randNum2}`;
  const answer = getGcd(randNum1, randNum2).toString();

  return [question, answer];
};

const start = () => basicOfGames(purposeOfGcdGame, game);

export default start;
