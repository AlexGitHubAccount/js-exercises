# getDoubleFunction

Напишите функцию `getDoubleFunction` высшего порядка, которая принимает функцию, и возвращается функцию вызывающую исходную 2 раза. Новая функция возвращает значение, которое вернула бы исходная функция.

Пример:

```javascript
let counter = 0;

function getSum(a, b) {
	counter++;
	return a + b;
}

const fun = getDoubleFunction(getSum);
const result = fun(1, 2);

console.log(counter); // 2
console.log(result); // 3
```
