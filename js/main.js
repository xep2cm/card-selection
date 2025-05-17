document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-item');
    const resultMessage = document.getElementById('result-message');
    let selectedCount = 0; // Количество выбранных карт

    cards.forEach((card) => {
        card.addEventListener('click', function() {
            if (this.classList.contains('selected')) {
                // Если карта уже выбрана, снимаем выбор
                this.classList.remove('selected');
                selectedCount--;
                
                // Если снято хотя бы одно выделение, скрываем сообщение
                if (selectedCount < 4) {
                    resultMessage.textContent = '';
                }
            } else {
                // Если лимит карт исчерпан, остановить выбор
                if (selectedCount >= 4) return;

                this.classList.add('selected');
                selectedCount++;

                // Если выбрано ровно 4 карты, определить оставшуюся
                if (selectedCount === 4) {
                    const unselectedCard = [...cards].find(card => !card.classList.contains('selected'));
                    resultMessage.textContent = `Оставшаяся карта: ${unselectedCard.querySelector('.card-name').textContent}`;
                }
            }
        });
    });
});