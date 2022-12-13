const inputLabels = document.querySelectorAll('.inputLabel')
const inputs = document.querySelectorAll('.loginInput input')
const loginBtn = document.querySelector('#submitInput')
const boxMsg = document.querySelector('.boxMsg')

inputs.forEach((input, e) => {
    input.addEventListener('input', () => {
        if (input.value){
            document.querySelectorAll('.inputLabel')[e].style = 'transform: translateY(-25px); color: #16BFFD; margin-left: 0px;'
        } else {
            document.querySelectorAll('.inputLabel')[e].style = 'transform: translateY(0px); color: #a3a3a3; margin-left: 6px;'
        }
    })
})  

loginBtn.addEventListener('click', () => {
    if (inputs[0].value == false || inputs[1].value == false){
        boxMsg.style = 'position: absolute; top: 20px;'
        boxMsg.classList.remove('loginInvalid')
        boxMsg.classList.add('loginInvalid')
        boxMsg.firstElementChild.textContent = 'Verifique as informações!'
    }
})