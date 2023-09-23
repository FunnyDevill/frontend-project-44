import { getRandom, basicOfGames } from '../index.js';

export default function gcdGame () {

    const purposeOfGcdGame = 'Find the greatest common divisor of given numbers.';

    function taskForGcdGame () {

    const randNum1 = getRandom(100);
    const randNum2 = getRandom(10);

    const question = `${randNum1} and ${randNum2}`;

    let result;

    function getGcd (num1, num2) {
        if (num1 % num2 === 0) {
          return num2;
        };
  
        return getGcd(num2, num1 % num2);
      };
  
      result = getGcd(randNum1, randNum2).toString();
  
      return [question, result];
    };
    basicOfGames(purposeOfGcdGame, taskForGcdGame);
  }