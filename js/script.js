'use stict'

const name = 'Victor';
let boss = name;

alert(`Добрый день, ${boss}!`)


const res_1 = "" + 2 + 0;
const res_2 = "" - 2 + 0;
const res_3 = "4" > "22";
const res_4 = 4 + 7 + "px";
const res_5 = "3px" - 5;
const res_6 = "30px" + "50px";
const res_7 = "50px" - "30px";

console.log(`Результат выражения res_1: ${res_1}`);
//Все операнды - строки. В итоге соединяются друг с другом оператором соединения "+".

console.log(`Результат выражения res_2: ${res_2}`);
// Арифметические операторы, кроме бинарного плюса, работают только с числами и всегда преобразуют операнды в числа (0 - 2 + 0 = -2).

console.log(`Результат выражения res_3: ${res_3}`);
//Если первый символ первой строки больше, чем первый символ второй, то первая строка больше второй.

console.log(`Результат выражения res_4: ${res_4}`);
// Операторы работают один за другим. Первый + складывает два числа и возвращает 11, затем следующий + объединяет результат со строкой, производя действие 11 + 'рх' = 11рх.

console.log(`Результат выражения res_5: ${res_5}`);
// Математичкский операнд вычитания работает только с числами, а первый оператор является строкой (не числом)NaN - не число.

console.log(`Результат выражения res_6: ${res_6}`);
//Произошла конкатенация (объединение, соединение) двух строк в одну без пробела

console.log(`Результат выражения res_7: ${res_7}`);
//NaN - не число. Произошло птому, что оба оператора являются строками (не числами), а математичкский операнд вычитания работает только с числами.


