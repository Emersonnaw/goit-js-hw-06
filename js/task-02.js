const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ulRef = document.querySelector('#ingredients');
const liValue =[];
  
const elements = ingredients.map(ingredient => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  liRef.classList.add('item');
  liValue.push(ingredient);
  return liRef;
});
  
ulRef.append(...elements);
