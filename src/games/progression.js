import { getRandom, basicOfGames, getRandomRange } from '../index.js';

export default function progressionGame() {
  const purposeOfProgressionGame = 'What number is missing in the progression?';

  function taskForProgressionGame() {
    const startRandomNumber = getRandom(100);
    const stepNumber = getRandomRange(1,10); 
    const lengthProgression = getRandomRange(5,10);
    
    const progression = [];

    let nextNumber = startRandomNumber + stepNumber;
    progression.push(nextNumber);

    for (let i = 0; i < lengthProgression - 1; i += 1) {
      nextNumber += startRandomNumber;
      progression.push(nextNumber);
    }

    const lastIndexOfProgression = progression.length - 1;
    const randNumerOfArr = getRandomRange(0, lastIndexOfProgression);
    const removedNumber = progression[randNumerOfArr];
    progression[randNumerOfArr] = '..';

    const question = progression.join(' ');
    const result = removedNumber.toString();
    return [question, result];
  }
  basicOfGames(purposeOfProgressionGame, taskForProgressionGame);
}
