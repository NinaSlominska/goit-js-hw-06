let counterValue = 0;
const counter = document.querySelector('#counter');
const decrement = counter.querySelector('[data-action="decrement"]');
const increment = counter.querySelector('[data-action="increment"]');
const myValue = counter.querySelector('#value');

decrement.addEventListener('click', () => {
    counterValue -= 1
    myValue.textContent = counterValue;
   
})
increment.addEventListener('click', () => {
    counterValue += 1
    myValue.textContent = counterValue;
})