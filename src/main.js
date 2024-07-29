import shows from './data/shows.js';
import albums from './data/albums.js';
import prepareShowCard from './features/prepareShowCard.js';
import swiper from './features/swiper.js';
import cheshireCat from './assets/images/albums/1.jpg';

const showList = document.querySelector('.shows__list');
const musicList = document.querySelector('.music__list');

shows.forEach((show) => {
  const card = prepareShowCard(show);
  showList.append(card);
});

const prepareMusicCard = (music) => {
  const musicCardTemplate = document.querySelector(
    '#music-card-template',
  ).content;

  const card = musicCardTemplate.querySelector('.music__card').cloneNode(true);
  const musicImage = card.querySelector('.music__card-image');
  musicImage.src = music.cover;
  musicImage.alt = `Cover of ${music.title} album`;

  const musicTitle = card.querySelector('.card__info-heading');
  musicTitle.textContent = `${music.title}`;

  const musicYear = card.querySelector('.card__info-subheading');
  musicYear.textContent = `${music.year}`;

  const musicLink = card.querySelector('.music__link');
  musicLink.href = music.link;

  return card;
};

albums.forEach((album) => {
  const card = prepareMusicCard(album);
  musicList.prepend(card);
});
