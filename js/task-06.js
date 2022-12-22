const input = document.querySelector('#validation-input')
const length = +input.getAttribute('data-length')
input.addEventListener('blur', (event) => {
    const eventLength = event.currentTarget.value.length
    if (eventLength === length) {
input.classList=('valid')
    }
    else {input.classList=('invalid') }
    
})
