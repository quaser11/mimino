function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.querySelector('.backdrop').style.display = 'block';
  }

  // Функция для закрытия конкретного модального окна
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.querySelector('.backdrop').style.display = 'none';
  }

  // Добавьте обработчики событий для кнопок открытия и закрытия
  document.querySelectorAll('.restaurant-open-modal-button').forEach(function(button) {
    button.addEventListener('click', function() {
      openModal(button.dataset.modalId);
    });
  });

  document.querySelectorAll('.restaurant-book-modal__exit__button').forEach(function(button) {
    button.addEventListener('click', function() {
      closeModal(button.dataset.modalId);
    });
  });

  document.querySelectorAll('.backdrop').forEach(function(backdrop) {
    backdrop.addEventListener('click', function() {
      closeModal(backdrop.nextElementSibling.id);
    });
  });