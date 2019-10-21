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

let container = document.getElementById('container');
createTree(container, data);

function createTree(container, data) {
  const ul = document.createElement('ul');
  for (const [key, value] of Object.entries(data) ) {
    const li = document.createElement('li');
    li.append(key);
    if (Object.keys(value).length > 0) {
      createTree(li , value);
      ul.append(li);
    } else {
      ul.append(li);
    }
  }
  container.append(ul);
}

