const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text')
input.addEventListener('input', (event) => {
    const font = input.value + 'px'
    text.style.fontSize = font
}
)