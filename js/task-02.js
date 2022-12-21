const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
const items = ingredients.map(ingredient => {
  const item = document.createElement('li')
  item.textContent = ingredient
  item.classList='item'
  return item
})
ingredientsList.append (...items)
