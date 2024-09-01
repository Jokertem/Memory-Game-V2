const Game: HTMLElement = document.querySelector(".game");
const gamePanel: HTMLDivElement = document.querySelector(".game_info");
const CardsContainer: HTMLDivElement = document.querySelector(".cards");

let moves: number = 0;
let pairs: number = 0;
let clicks = 0;
const renderPanel = () => {
  if (playerAccout == "1p") {
    gamePanel.classList.add("onePlayer");
    const PlayerName: HTMLElement = document.createElement("b");
    PlayerName.innerText = FirstPlayer;

    const MovesCounter: HTMLElement = document.createElement("b");
    MovesCounter.innerText = `Moves ${moves}`;

    const PairsCounter: HTMLElement = document.createElement("b");
    PairsCounter.innerText = `Pairs ${pairs}/${cardsAcount}`;

    gamePanel.appendChild(PlayerName);
    gamePanel.appendChild(MovesCounter);
    gamePanel.appendChild(PairsCounter);
  }
};
const cards = [];
const setCards = () => {
  CardsContainer.classList.add(`cards-${cardsAcount}`);
  const cardsImg = [];

  for (let index: number = 1; index < Number(cardsAcount) / 2 + 1; index++) {
    const element = index;
    cardsImg.push(element);
    cardsImg.push(element);
  }

  for (let index = 0; index < Number(cardsAcount); index++) {
    const card = document.createElement("img");
    card.classList.add("card");
    const cardID = Math.floor(Math.random() * cardsImg.length);
    card.id = cardsImg[cardID];
    cardsImg.splice(cardID, 1);
    card.src = `/Cards/Card-${0}.png`;
    card.addEventListener("click", () => OpenCard(index));
    cards.push(card);
    CardsContainer.appendChild(card);
  }
  console.log(cards);
};
const OpenCard = (i) => {};
