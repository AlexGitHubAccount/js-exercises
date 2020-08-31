# getMonthMatrix

Напишите функцию, возвращающую матрицу месяца. Матрица месяца - массив массивов по 7 дней с понедельника по воскресенье. Отсутствующие дни матрицы заменить на null.

_В датах `JavaScript` месяцы отсчитываются с 0. Январь - 0 месяц, февраль - 1 месяц и тд. Год и день месяца отсчитываются нормально._

_Считать, что неделя начинается с понедельника._

Пример:

```javascript
// Август 2020 года
getMonthMatrix(2020, 7);

/* Посмотрите в календаре август 2020 года:
[
    [null, null, null, null, null, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 28, 30],
    [31, null, null, null, null, null, null]
]
*/
```