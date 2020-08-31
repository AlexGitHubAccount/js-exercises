# getMonthMatrix

Матрица графа - матрица булевых значений с присутствующими путями. Например следующее изображение и матрица описывают один и тот же граф.

![Graph 1](/sets/images/graph_1.png)

```javascript
// Узлами выступают индексы строки и столбца
[
	[false, true, true, false],
	[true, false, true, true],
	[true, true, false, true],
	[false, true, true, false],
];
```

Подбромнее: [Матрица смежности](https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D1%80%D0%B8%D1%86%D0%B0_%D1%81%D0%BC%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8)

Напишите функцию поиска кратчайшего пути. В качестве аргументов передаются 2 узла, и матрица-граф. Результатом выполнения функции:

- если начальный и конечный узел совпадают, то пустой массив
- если пути между узлами не существует, то `false`
- массив - кратчайший путь передвижения по графу между начальным и конечным узлами.

Пример:

```javascript
const graph = [
	[false, true, true, false],
	[true, false, true, true],
	[true, true, false, true],
	[false, true, true, false],
];

getShortPath(0, 0, graph); // []
getShortPath(0, 100, graph); // false
getShortPath(0, 1, graph); // [0, 1]
getShortPath(0, 2, graph); // [0, 2]
getShortPath(0, 3, graph); // [0, 1, 3] или [0, 2, 3]
```
