import shows from "./data/shows.js";
import albums from "./data/albums.js";

import prepareShowCard from "./features/prepareShowCard.js";

const showList = document.querySelector(".shows__list");
shows.forEach((show) => {
  const card = prepareShowCard(show);
  showList.append(card);
});

console.log(albums);
