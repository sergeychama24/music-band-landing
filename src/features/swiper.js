import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const musicNextButton = document.querySelector('.next-button--music');
const musicPrevButton = document.querySelector('.prev-button--music');

export const swiperMusic = new Swiper('.swiper-music', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    prevEl: musicPrevButton,
    nextEl: musicNextButton,
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
