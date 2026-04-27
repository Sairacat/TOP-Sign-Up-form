const toggleButton = document.querySelector('.toggle-btn')
const togglePanel = document.querySelector('.rightside-wrapper')
const logWrapper = document.querySelector('.log-wrapper')
const errorMessage1 = document.querySelector('.error-message1')
const errorMessage2 = document.querySelector('.error-message2')
const passwordConfirm = document.querySelector('#password-confirm')
const userEmail = document.querySelector('#email')
const emailOptions = document.querySelectorAll('#myEmail option')
const password = document.querySelector('#password')
const checkmark1 = document.querySelector('.checkmark1')
const checkmark2 = document.querySelector('.checkmark2')
const mypolygon = document.querySelector('#mypolygon')
const copy1 = document.querySelector('.copy1')
const copy2 = document.querySelector('.copy2')


toggleButton.addEventListener('click', function(e) {
    togglePanel.classList.toggle('collapse')
    logWrapper.classList.toggle('log-move')
    mypolygon.classList.toggle('polygon-change')
    copy1.classList.toggle('copy-move')
    copy2.classList.toggle('copy-move2')
})

password.addEventListener('blur', function(e) {
    if(password.value === '') {
        errorMessage1.textContent = 'Required'
        return
    }
})

password.addEventListener('focus', function(e) {
    errorMessage1.textContent = ''
})


passwordConfirm.addEventListener('blur', function(e){
    if(passwordConfirm.value === '') {
        errorMessage2.textContent = 'Required'
        return
    }
    if(password.value === passwordConfirm.value) {
        errorMessage2.textContent = ''
        passwordConfirm.classList.remove('touched')
    }else {
        errorMessage2.textContent = 'Please enter the same password'
        passwordConfirm.classList.add('touched')
    }
})

passwordConfirm.addEventListener('focus', function(e) {
    errorMessage2.textContent = ''
})

password.addEventListener('input', function(e) {
    if(password.value === '') {
        checkmark1.textContent = ''
        errorMessage1.textContent = ''
        return
    }
    if(!password.checkValidity()) {
        checkmark1.textContent = '❌'
        errorMessage1.textContent = 'Password should be at least 8 digit with a Captial letter and multiple numbers'
        password.classList.add('touched')
    }else {
        checkmark1.textContent = '✅'
        errorMessage1.textContent = ''
        password.classList.remove('touched')
    }
})

passwordConfirm.addEventListener('input', function(e) {
    if(passwordConfirm.value === '') {
        checkmark2.textContent = ''
        return
    } 
    if(password.value === passwordConfirm.value) {
        checkmark2.textContent = '✅'
        passwordConfirm.classList.remove('touched')
    }else {
        checkmark2.textContent = '❌'
        passwordConfirm.classList.add('touched')
    }
})

userEmail.addEventListener('input', function(e) {
    if(userEmail.value.includes('@')|| !userEmail.value) return
    emailOptions.forEach(option => {
        const domain = option.getAttribute('data-domain')
        option.textContent = userEmail.value + domain
})
})