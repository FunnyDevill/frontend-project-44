import { getRandom, basicOfGames } from '../index.js';

export default function calcGame () {
      const purposeOfCalcGame = 'What is the result of the expression?';

      function taskForCalcGame() {
        const randNum1 = getRandom(100);
        const randNum2 = getRandom(10);
        const symbol = ['+', '-', '*'];
        const randSymbol = symbol[getRandom(2)];

        const question = `${randNum1} ${randSymbol} ${randNum2}`;

        let result;
        if (randSymbol === symbol[0]) {
            result = randNum1 + randNum2;
        } else if (randSymbol === symbol[1]) {
            result = randNum1 - randNum2;
        } else {
            result = randNum1 * randNum2;
        }
        result = result.toString();
        return [question, result];
    }
  basicOfGames(purposeOfCalcGame, taskForCalcGame);
}
