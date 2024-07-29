import shows from './data/shows.js';
import albums from './data/albums.js';
import prepareShowCard from './features/prepareShowCard.js';
import prepareMusicCard from './features/prepareMusicCard.js';
import swiper from './features/swiper.js';

swiper.init();

const showList = document.querySelector('.shows__list');
const musicList = document.querySelector('.music__list');

shows.forEach((show) => {
  const card = prepareShowCard(show);
  showList.append(card);
});

albums.forEach((album) => {
  const card = prepareMusicCard(album);
  musicList.prepend(card);
});
