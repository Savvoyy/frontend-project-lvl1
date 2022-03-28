// приветствуем игрока
const greeting = () => {  
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
};

// функция генерации случайноего числа
const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// получаем ответ
const userAnswer = () => readlineSync.question('Your answer:');

// сравниваем ответ игрока с верным
const compare = (userAnswer, answer) => {
if (userAnswer === answer) {
  console.log('Correct!');
} else {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`
  );
  console.log(`Let's try again, ${userName}!`); // отвечаем игроку
  return;
};
};
export default { greeting, randomNum, userAnswer, compare };
