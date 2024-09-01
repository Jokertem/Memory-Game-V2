const Game = document.querySelector(".game");
const gamePanel = document.querySelector(".game_info");
const CardsContainer = document.querySelector(".cards");
let moves = 0;
let pairs = 0;
let clicks = 0;
const renderPanel = () => {
    gamePanel.innerHTML = "";
    if (playerAccout == "1p") {
        gamePanel.classList.add("onePlayer");
        const PlayerName = document.createElement("b");
        PlayerName.innerText = FirstPlayer;
        const MovesCounter = document.createElement("b");
        MovesCounter.innerText = `Moves ${moves}`;
        const PairsCounter = document.createElement("b");
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
    for (let index = 1; index < Number(cardsAcount) / 2 + 1; index++) {
        const element = index;
        cardsImg.push(element);
        cardsImg.push(element);
    }
    for (let index = 0; index < Number(cardsAcount); index++) {
        const card = {
            state: "close",
            photo: `Card-${0}.png`,
        };
        cards.push(card);
    }
    cards.forEach((element, index) => {
        const cardID = Math.floor(Math.random() * cardsImg.length);
        element.photo = `./Cards/Card-${cardsImg[cardID]}.jpg`;
        const i = cardsImg.indexOf(cardsImg[cardID]);
        cardsImg.splice(i, 1);
    });
};
const renderCards = () => {
    CardsContainer.innerHTML = "";
    cards.forEach((element, index) => {
        const card_ = document.createElement("img");
        card_.classList.add("card");
        if (element.state == "close") {
            card_.src = `./Cards/Card-0.png`;
            card_.addEventListener("click", () => OpenCard(index));
        }
        else if (element.state == "open") {
            card_.src = element.photo;
        }
        CardsContainer.appendChild(card_);
    });
};
const OpenCard = (i) => {
    cards[i].state = "open";
    clicks++;
    if (clicks == 1) {
        const FirstCard = cards[i].photo;
        console.log("ss");
    }
    else if (clicks == 2) {
        const SecondCard = cards[i].photo;
        moves++;
        clicks = 0;
        // CheckPair(FirstCard, SecondCard);
    }
    renderPanel();
    renderCards();
};
const CheckPair = (v1, v2) => {
    console.log(v1);
    console.log(v2);
};
