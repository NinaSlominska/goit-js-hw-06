const categories = document.querySelector('#categories');
const categoriesChildren=[...categories.children]
const numberСategories = categoriesChildren.length;
console.log('Number of categories:', numberСategories);
for (const element of categoriesChildren) {
    console.log('Category:', element.querySelector('h2').textContent) 
  console.log('Elements:', [...element.querySelector('ul').children].length)  
}
