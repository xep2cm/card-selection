document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-item');

    cards.forEach((card) => {
        card.addEventListener('click', function(event) {
            event.target.classList.add('selected');
        });
    });
});