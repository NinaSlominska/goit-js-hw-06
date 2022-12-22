const input = document.querySelector('#name-input');
const name = document.querySelector('#name-output');


input.addEventListener('input', (event) => {
    const newName = event.currentTarget.value
    
    if (newName) {
       return name.textContent = newName 
    }
    return name.textContent ='Anonymous'
    // console.log(event.currentTarget.value)
      
})
// console.log (input)