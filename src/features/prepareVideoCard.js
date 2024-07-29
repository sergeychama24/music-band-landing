const prepareVideoCard = (data) => {
  const cardTemplate = document.querySelector('#videos-card-template').content;
  const card = cardTemplate.querySelector('.videos__list-item').cloneNode(true);

  const player = card.querySelector('.videos__player');
  player.src = data.link;

  return card;
};

export default prepareVideoCard;
