const bars = document.querySelector('.bars')
const mobileNav = document.querySelector('.mobile-nav-container')
const close = document.querySelector('.close')


 bars.addEventListener('click', displayNav)

function displayNav(){
    mobileNav.classList.add('display-mobile')
}

close.addEventListener('click', removeNav)
function removeNav(){
    mobileNav.classList.remove('display-mobile')
}