import { getRandom, basicOfGames } from '../index.js';

const purposeOfGcdGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (rNum1, rNum2) => (!rNum2 ? rNum1 : getGcd(rNum2, rNum1 % rNum2));

function game() {
  const rNum1 = getRandom(100);
  const rNum2 = getRandom(10);
  const question = `${rNum1} ${rNum2}`;
  const answer = getGcd(rNum1, rNum2).toString();

  return [question, answer];
}

const start = () => basicOfGames(purposeOfGcdGame, game);

export default start;
