const prepareMusicCard = (music) => {
  const cardTemplate = document.querySelector('#music-card-template').content;

  const card = cardTemplate.querySelector('.music__card').cloneNode(true);

  const cardCover = card.querySelector('.music__card-image');
  cardCover.src = music.cover;
  cardCover.alt = `Cover of ${music.title} album`;

  const cardTitle = card.querySelector('.card__info-heading');
  cardTitle.textContent = `${music.title}`;

  const cardYear = card.querySelector('.card__info-subheading');
  cardYear.textContent = `${music.year}`;

  const link = card.querySelector('.music__link');
  link.href = music.link;

  return card;
};

export default prepareMusicCard;
