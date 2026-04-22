const toggleButton = document.querySelector('.toggle-btn')
const togglePanel = document.querySelector('.rightside-wrapper')
const logWrapper = document.querySelector('.log-wrapper')

toggleButton.addEventListener('click', function(e) {
    togglePanel.classList.toggle('collapse')
    logWrapper.classList.toggle('log-move')
})