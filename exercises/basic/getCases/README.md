# getCases

Напишиет функцию, принимающую строку в одной из нотаций (или текст с пробелами), и возвращающую массив входного аргумента в разных нотациях.

Пример:

```javascript
getCases("last element"); // ["lastElement", "last-element", "last_element"]
getCases("lastElement"); // ["lastElement", "last-element", "last_element"]
getCases("last-element"); // ["lastElement", "last-element", "last_element"]
getCases("last_element"); // ["lastElement", "last-element", "last_element"]
```
