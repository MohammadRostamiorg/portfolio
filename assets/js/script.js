const burgerIcon = document.getElementById('burger-icon');
const menuUl = document.querySelector('nav ul');
burgerIcon.addEventListener('click', () => {
    menuUl.classList.toggle('active');
    burgerIcon.classList.toggle('active')
})