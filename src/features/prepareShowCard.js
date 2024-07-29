function prepareShowCard(cardData) {
  const cardTemplate = document.querySelector('#show-card-template').content;
  const card = cardTemplate.querySelector('.show-card').cloneNode(true);

  const day = card.querySelector('.day');
  day.textContent = cardData.day;

  const month = card.querySelector('.month');
  month.textContent = cardData.month;

  const heading = card.querySelector('.show-card__heading');
  heading.textContent = cardData.place;

  const city = card.querySelector('.show-card__city');
  city.textContent = `${cardData.region.city}, ${cardData.region.state}`;

  const buyLink = card.querySelector('.show-card__buy-link');
  buyLink.href = 'https://www.ticketmaster.ca/blink-182-tickets/artist/790708';

  return card;
}

export default prepareShowCard;
