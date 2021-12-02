let icon = document.getElementById('icon')
let links = document.getElementsByClassName('links')[0]
let isOpen = false

icon.addEventListener('click', () => {
    if(isOpen) {
        links.style.left = '-100%';
        isOpen  = false
    }
    else {
        links.style.left = '0'
        isOpen = true
    }
})