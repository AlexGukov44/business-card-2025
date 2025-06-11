const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselWidth = document.querySelector('.carousel').offsetWidth;
let currentPosition = 0;
const numItems = carouselItems.length;
const totalWidth = carouselWidth * numItems; // Общая ширина всех элементов


function moveCarousel(offset) {
  currentPosition += offset;

  // Логика зацикливания:
  if (currentPosition < 0) {
    currentPosition = numItems - 1;
    carouselInner.style.transition = 'none'; // Убираем переход для мгновенного перескока
    carouselInner.style.transform = `translateX(-${currentPosition * carouselWidth}px)`;
    setTimeout(() => {
      carouselInner.style.transition = 'transform 0.5s ease-in-out'; // Восстанавливаем переход
    }, 10);
  } else if (currentPosition >= numItems) {
    currentPosition = 0;
    carouselInner.style.transition = 'none'; // Убираем переход для мгновенного перескока
    carouselInner.style.transform = `translateX(0px)`;
    setTimeout(() => {
      carouselInner.style.transition = 'transform 0.5s ease-in-out'; // Восстанавливаем переход
    }, 10);
  } else {
    carouselInner.style.transform = `translateX(-${currentPosition * carouselWidth}px)`;
  }
}


setInterval(() => moveCarousel(1), 3000); // Автопрокрутка каждые 3 секунды
