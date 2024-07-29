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

export default prepareMusicCard;
