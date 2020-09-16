# getMap

Напишите функцию высшего порядка `getMap`, возвращающую функцию `map` по имени свойства объекта.

Пример:

```javascript
const persons = [
	{ id: 1, name: "Алексей", surname: "Данчин" },
	{ id: 2, name: "Олег", surname: "Песков" },
	{ id: 3, name: "Татьяна", surname: "Мельник" },
	{ id: 4, name: "Олег", surname: "Тинькофф" },
	{ id: 5, name: "Мария", surname: "Вевелон" },
];

const getNames = getMap("name");
const names = getNames(persons); // ["Алексей", "Олег", "Татьяна", "Олег", "Мария"]
```
