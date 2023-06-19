const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#my-nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('show');
    const menuImage = menuButton.getAttribute('src');
    if (menuImage.includes('hamburger')) {
        menuButton.setAttribute('src', "images/menu-cross.svg");
    }
    else
    {
        menuButton.setAttribute('src', "images/hamburger-menu.svg");
    }
});
