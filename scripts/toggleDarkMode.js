const main = document.querySelector('main');
const title = document.querySelector('.title-container');
const headers = document.querySelectorAll('.card-header');
const cards = document.querySelectorAll('.card');

const darkLightButton = document.querySelector('.dark-light-button');

darkLightButton.addEventListener('click', () => {
    main.classList.toggle('dark-mode');
    title.classList.toggle('dark-mode');
    headers.forEach((header) => header.classList.toggle('dark-mode'));
    cards.forEach((card) => card.classList.toggle('dark-mode'));

    const darkLightImage = darkLightButton.getAttribute('src');
    if (darkLightImage.includes('dark')) {
        darkLightButton.setAttribute('src', "images/light-mode.svg");
    }
    else
    {
        darkLightButton.setAttribute('src', "images/dark-mode.svg");
    }
});
