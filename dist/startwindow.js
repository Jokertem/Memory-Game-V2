const StartWindow = document.querySelector(".startWindow");
const PlayerAccountInput = document.querySelector("#playersAccount");
const NameInputContainer = document.querySelector(".nameInput");
const CardsAccountSelect = document.querySelector("#cardsAccout");
const StartButton = document.querySelector(".startButton");
let playerAccout = "1p";
let cardsAcount = "12";
let FirstPlayer = "FirstPlayer";
let SecondPlayer = "SecondPlayer";
const SetPlayerAccount = () => {
    const FirstInput = document.createElement("input");
    FirstInput.placeholder = "First Player Name";
    FirstInput.autocomplete = "off";
    FirstInput.addEventListener("change", (e) => {
        FirstPlayer = e.target.value;
        console.log(FirstPlayer);
    });
    const SecondInput = document.createElement("input");
    SecondInput.placeholder = "Second Player Name";
    SecondInput.autocomplete = "off";
    SecondInput.addEventListener("change", (e) => {
        SecondPlayer = e.target.value;
        console.log(SecondPlayer);
    });
    FirstInput.id = "nameOne";
    SecondInput.id = "nameTwo";
    NameInputContainer.innerHTML = "";
    if (playerAccout == "1p") {
        NameInputContainer.appendChild(FirstInput);
    }
    else {
        NameInputContainer.appendChild(FirstInput);
        NameInputContainer.appendChild(SecondInput);
    }
};
SetPlayerAccount();
PlayerAccountInput.addEventListener("change", (e) => {
    playerAccout = e.target.value;
    SetPlayerAccount();
});
CardsAccountSelect.addEventListener("change", (e) => {
    cardsAcount = e.target.value;
});
StartButton.addEventListener("click", () => {
    StartWindow.classList.add("hide");
    Game.classList.remove("hide");
    renderPanel();
    setCards();
    renderCards();
});
