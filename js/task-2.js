const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = ingredients.map(item => {
    const list = document.createElement("li");
    list.textContent = item;
    return list; 
});

const ingredientsRef = document.querySelector("#ingredients");
ingredientsRef.append(...ingredientsList);


