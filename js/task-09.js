
const body = document.querySelector('body')
const button = body.querySelector('.change-color')
button.addEventListener('click', event =>{
  let text = body.querySelector('.color');
  text.textContent = getRandomHexColor()
  body.style.backgroundColor=text.textContent
 
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
