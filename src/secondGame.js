import { greeting, randomNum, userAnswer, compare } from '../src/index.js';

const brainCalc = () => {
greeting();
// генерим рандомную операцию 
const operator = () => {
  const mass = ['+', '-', '*'];  
  let i = randomNum (0, 2);
  return mass[i];
};
// сообщаем правила
console.log('What is the result of the expression?');

for (let i = 0; i < 3; i += 1) {
  const num1 = randomNum(1, 99);
  const num2 = randomNum(1, 99);
  console.log(`Question: ${num1} ${operator} ${num2}`); // задаем вопрос
  userAnswer();
  const answer = () => {
    let result;
    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-' ) {
      result = num1 - num2;
    } else (result = num1 * num2)
  return result;
  };
  compare(userAnswer, answer);
}
console.log(`Congratulations, ${userName}!`);
};
export default brainCalc;
