import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const musicNextButton = document.querySelector('.next-button--music');
const musicPrevButton = document.querySelector('.prev-button--music');

const videosNextButton = document.querySelector('.next-button--videos');
const videosPrevButton = document.querySelector('.prev-button--videos');

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

export const swiperVideos = new Swiper('.swiper-videos', {
  direction: 'horizontal',
  loop: true,

  slidesPerView: 'auto',

  navigation: {
    nextEl: videosNextButton,
    prevEl: videosPrevButton,
  },
});
