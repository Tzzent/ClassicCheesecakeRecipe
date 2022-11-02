const img_dots = document.querySelector('.img-dots');

const cDesc = document.querySelector('.classic-description');

img_dots.addEventListener('click', () => {
    cDesc.classList.toggle('c-d');
})