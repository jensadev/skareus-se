// Add your inline JS here
window.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const close = document.querySelector('button.btn-close');
    const modalContent = document.querySelector('.modal-content');
    const pictures = document.querySelectorAll('picture');

    pictures.forEach(picture => {
        picture.addEventListener('click', () => {
            modal.style.display = "block";
            const clone = picture.cloneNode(true);
            const figure = document.createElement('figure');
            figure.classList.add('flow');
            const figcaption = document.createElement('figcaption');
            figcaption.textContent = clone.querySelector('img').getAttribute('alt');
            figure.appendChild(clone);
            figure.appendChild(figcaption);
            modalContent.appendChild(figure);
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = "none";
        modalContent.innerHTML = '';
    });
});