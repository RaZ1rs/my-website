const cities = [
    {name: 'Москва', description: 'Москва - Столица России',image: 'images/moscow.jpeg'},
    {name: 'Санкт-Петербург', description: 'Санкт-Петербург - Культ ст.',image: 'images/peter.webp'},
    {name: 'Казань', description: 'Казань - Третья столица России',image: 'images/kazan.jpeg'},
    {name: 'Екатеринбург', description: 'Екатеринбург — третий по площади и четвёртый по численности населения город-миллионер в России',image: 'images/Ekate.jpg'},
    {name: 'Краснодар', description: 'Краснодар (до 1920 года — Екатеринодар) — город-миллионер на юго-западе России, административный центр Краснодарского края.',image: 'images/orig.jpeg'},
    {name: 'Владивосток', description: 'Владивосто́к — крупный город и порт на юге Дальнего Востока России; политический, культурный, научно-образовательный и экономический центр региона; административный центр Приморского края, Владивостокского городского округа[',image: 'images/vladivos.jpeg'},
];

// Получаем все элементы с классом 'marker' (маркеры на карте)
const markers = document.querySelectorAll('.marker');
// Получаем элемент info-box, который будет показывать название города при наведении на маркер 
const infoBox = document.getElementById('info-box');
// Получаем модальное окно и его элементы (заголовок, описание и изображение)
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription=document.getElementById('modal-description');
const modalImg = document.getElementById('modal-img');

markers.forEach(marker => {
    marker.addEventListener('mouseover', () => {
        const city = cities[marker.getAttribute('data-id')];
        infoBox.textContent = city.name;
        infoBox.style.top = `${marker.offsetTop - 30}px`;
        infoBox.style.left = `${marker.offsetLeft}px`;
        infoBox.classList.add('visible');
    });
marker.addEventListener('mouseout', () => {
    infoBox.classList.remove('visible');
});
marker.addEventListener('click', () => {
    const city = cities [marker.getAttribute('data-id')];
    modalTitle.textContent = city.name;
    modalDescription.textContent = city.description;
    modalImg.src= city.image;
    modal.style.display = 'flex';
  });
});

function closeModal(event) {
    modal.style.display = 'none';
}
