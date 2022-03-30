import { randomNum, game } from '../index.js';

const rule = 'What is the result of the expression?';

// считаем правильный ответ
const calc = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  } if (operator === '-') {
    return num1 - num2;
  } return num1 * num2;
};

// задаем вопрос _ получаем ответ
const operators = ['+', '-', '*'];
const newOperator = operators[randomNum(0, 2)];
const newNum1 = randomNum(1, 10);
const newNum2 = randomNum(1, 10);
const questionAnswer = () => {
  const question = `${newNum1} ${newOperator} ${newNum2}`;
  const answer = String(calc(newNum1, newNum2, newOperator));
  return [question, answer];
};

const brainCalc = () => game(rule, questionAnswer);

export default brainCalc;
