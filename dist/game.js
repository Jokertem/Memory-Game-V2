const Game = document.querySelector(".game");
const gamePanel = document.querySelector(".game_info");
const CardsContainer = document.querySelector(".cards");
let moves = 0;
let pairs1 = 0;
let pairs2 = 0;
let clicks = 0;
let turnInfo = `${FirstPlayer} Turn`;
let turn = 1;
const PairsCounterFirst = document.createElement("b");
const PairsCounterSecond = document.createElement("b");
const renderPanel = () => {
    gamePanel.innerHTML = "";
    if (playerAccout == "1p") {
        gamePanel.classList.add("onePlayer");
        const PlayerName = document.createElement("b");
        PlayerName.innerText = FirstPlayer;
        const MovesCounter = document.createElement("b");
        MovesCounter.innerText = `Moves ${moves}`;
        PairsCounterFirst.innerText = `Pairs ${pairs1}/${Number(cardsAcount) / 2}`;
        gamePanel.appendChild(PlayerName);
        gamePanel.appendChild(MovesCounter);
        gamePanel.appendChild(PairsCounterFirst);
    }
    else {
        gamePanel.classList.add("twoPlayers");
        const moveTurn = document.createElement("b");
        moveTurn.innerText = turnInfo;
        const FirstPlayerInfo = document.createElement("div");
        const SecondPlayerInfo = document.createElement("div");
        const PlayerName1 = document.createElement("b");
        PlayerName1.innerText = FirstPlayer;
        const PlayerName2 = document.createElement("b");
        PlayerName2.innerText = SecondPlayer;
        PairsCounterFirst.innerText = ` Pairs ${pairs1}/${Number(cardsAcount) / 2}`;
        PairsCounterSecond.innerText = ` Pairs ${pairs2}/${Number(cardsAcount) / 2}`;
        FirstPlayerInfo.appendChild(PlayerName1);
        FirstPlayerInfo.appendChild(PairsCounterFirst);
        SecondPlayerInfo.appendChild(PlayerName2);
        SecondPlayerInfo.appendChild(PairsCounterSecond);
        gamePanel.appendChild(FirstPlayerInfo);
        gamePanel.appendChild(SecondPlayerInfo);
        gamePanel.appendChild(moveTurn);
    }
};
const cards = [];
const setCards = () => {
    CardsContainer.classList.add(`cards-${cardsAcount}`);
    const cardsImg = [];
    const imgId = [];
    let imgCount = 0;
    while (imgCount != Number(cardsAcount) / 2) {
        const element = Math.floor(Math.random() * 12 + 1);
        if (imgId.includes(element)) {
            continue;
        }
        imgId.push(element);
        cardsImg.push(element);
        cardsImg.push(element);
        imgCount++;
        console.log(cardsImg);
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
        else if (element.state == "closeHide") {
            card_.src = `./Cards/Card-0.png`;
            card_.addEventListener("click", HideCard);
        }
        else if (element.state == "openHide") {
            card_.src = element.photo;
            card_.addEventListener("click", HideCard);
        }
        else if (element.state == "Pair") {
            card_.src = element.photo;
            card_.classList.add("Pair");
        }
        CardsContainer.appendChild(card_);
    });
};
let FirstCard = "V";
let SecondCard = "V";
const OpenCard = (i) => {
    cards[i].state = "open";
    renderCards();
    clicks++;
    if (playerAccout == "1p") {
        if (clicks == 1) {
            FirstCard = cards[i].photo;
        }
        else if (clicks == 2) {
            SecondCard = cards[i].photo;
            moves++;
            if (FirstCard != SecondCard) {
                cards.forEach((element) => {
                    if (element.state == "open") {
                        element.state = "openHide";
                    }
                    else if (element.state == "close") {
                        element.state = "closeHide";
                    }
                });
            }
            else {
                pairs1++;
                cards.forEach((element) => {
                    if (element.photo == FirstCard || element.photo == SecondCard) {
                        element.state = "Pair";
                    }
                });
            }
            clicks = 0;
            if (pairs1 >= Number(cardsAcount) / 2) {
                PairsCounterFirst.classList.add("win");
            }
        }
    }
    else if (playerAccout == "2p") {
        if (clicks == 1) {
            FirstCard = cards[i].photo;
        }
        else if (clicks == 2) {
            SecondCard = cards[i].photo;
            if (FirstCard != SecondCard) {
                cards.forEach((element) => {
                    if (element.state == "open") {
                        element.state = "openHide";
                    }
                    else if (element.state == "close") {
                        element.state = "closeHide";
                    }
                });
            }
            else {
                if (turn == 1) {
                    pairs1++;
                }
                else {
                    pairs2++;
                }
                cards.forEach((element) => {
                    if (element.photo == FirstCard || element.photo == SecondCard) {
                        element.state = "Pair";
                    }
                });
            }
            if (FirstCard != SecondCard) {
                if (turn == 1) {
                    turn = 2;
                    turnInfo = `${SecondPlayer} Turn`;
                }
                else {
                    turn = 1;
                    turnInfo = `${FirstPlayer} Turn`;
                }
                console.log(turn);
            }
            clicks = 0;
        }
        if (pairs1 + pairs2 >= Number(cardsAcount) / 2) {
            if (pairs1 > pairs2) {
                PairsCounterFirst.classList.add("win");
            }
            else if (pairs1 < pairs2) {
                PairsCounterSecond.classList.add("win");
            }
            else if (pairs1 == pairs2) {
                PairsCounterFirst.classList.add("win");
                PairsCounterSecond.classList.add("win");
            }
        }
    }
    renderPanel();
    renderCards();
};
const HideCard = () => {
    cards.forEach((element) => {
        if (element.state != "Pair") {
            element.state = "close";
        }
    });
    renderCards();
};
