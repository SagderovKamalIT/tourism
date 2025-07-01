const toggleButtons = document.querySelectorAll('.js-advantages__block-toggle');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const content = button.closest('.advantages__item').querySelector('.js-advantages__content');
    const icon = button.querySelector('.js-advantages__block-toggle-img');

    content.classList.toggle('active');
    icon.classList.toggle('rotate');
  });
});