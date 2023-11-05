// toggle menu
const toggleBtn = document.querySelector('.toggle-btn');
const navMenu = document.querySelector('.nav__menu');
const overlay = document.querySelector('.overlay');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active')
    navMenu.classList.toggle('active')
    overlay.classList.toggle('active')
})

// close menu on link click
const navLink = document.querySelectorAll('.nav__menu a');

navLink.forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active')
        toggleBtn.classList.remove('active')
        overlay.classList.remove('active')
    })
})