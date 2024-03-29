# Tree-from-object
##Создайте дерево из объекта
Напишите функцию **createTree**, которая создаёт вложенный список `ul/li` из объекта.
Например:
```js
let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};
```
Синтаксис:
```js
let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере
```
Результат (дерево):
* Рыбы
  * форель
  * лосось
* Деревья
  * Огромные
    * секвойя
    * дуб
  * Цветковые
    * яблоня
    * магнолия
---
Выберите один из двух способов решения этой задачи:
1. Создать строку, а затем присвоить через `container.innerHTML`.
2. Создавать узлы через методы DOM.

Если получится – сделайте оба.

P.S. Желательно, чтобы в дереве не было лишних элементов, в частности - пустых `<ul></ul>` на нижнем уровне.
