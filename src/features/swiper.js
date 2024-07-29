import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: nextButton,
    prevEl: prevButton,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 64,
    },
  },
});

export default swiper;
