function prepareShowCard(cardData) {
  const showCard = document.createElement("li");
  showCard.classList.add("shows-card");

  const colHalf = document.createElement("div");
  colHalf.classList.add("col-half");
  showCard.prepend(colHalf);

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("shows-card__date");
  colHalf.prepend(dateDiv);

  for (let i = 0; i < 2; i++) {
    const dateItem = document.createElement("span");
    dateItem.classList.add("shows-card__date-item");
    dateDiv.prepend(dateItem);
    if (i === 0) {
      dateItem.textContent = cardData.month;
    }
    if (i === 1) {
      dateItem.textContent = cardData.day;
    }
  }

  const showHeading = document.createElement("h3");
  showHeading.classList.add("shows-card__heading");
  showHeading.textContent = cardData.place;
  colHalf.append(showHeading);

  const secondHalf = document.createElement("div");
  secondHalf.classList.add("col-half");

  const city = document.createElement("span");
  city.classList.add("shows-card__city");
  city.textContent = `${cardData.region.city}, ${cardData.region.state}`;

  const buyLink = document.createElement("a");
  buyLink.setAttribute(
    "href",
    "https://www.ticketmaster.ca/blink-182-tickets/artist/790708",
  );
  buyLink.setAttribute("target", "_blank");

  const buyTicketButton = document.createElement("button");
  buyTicketButton.classList.add("show-card__button");
  buyTicketButton.textContent = "Buy Ticket";

  buyLink.prepend(buyTicketButton);

  secondHalf.prepend(buyLink);
  secondHalf.prepend(city);

  showCard.append(secondHalf);

  return showCard;
}

export default prepareShowCard;
