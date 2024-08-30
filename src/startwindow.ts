const StartWindow: HTMLElement = document.querySelector(".startWindow");
const PlayerAccountInput: HTMLInputElement =
  document.querySelector("#playersAccount");
const NameInputContainer: HTMLDivElement = document.querySelector(".nameInput");
const CardsAccountSelect: HTMLInputElement =
  document.querySelector("#cardsAccout");
const StartButton: HTMLButtonElement = document.querySelector(".startButton");

let playerAccout: string = "1p";
let cardsAcount: string = "8c";

let FirstPlayer: string = "FirstPlayer";
let SecondPlayer: string = "SecondPlayer";

const SetPlayerAccount = () => {
  const FirstInput: HTMLInputElement = document.createElement("input");
  FirstInput.placeholder = "First Player Name";
  FirstInput.addEventListener("change", (e) => {
    FirstPlayer = e.target.value;
    console.log(FirstPlayer);
  });
  const SecondInput: HTMLInputElement = document.createElement("input");
  SecondInput.placeholder = "Second Player Name";
  SecondInput.addEventListener("change", (e) => {
    SecondPlayer = e.target.value;
    console.log(SecondPlayer);
  });
  FirstInput.id = "nameOne";
  SecondInput.id = "nameTwo";
  NameInputContainer.innerHTML = "";
  if (playerAccout == "1p") {
    NameInputContainer.appendChild(FirstInput);
  } else {
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
});
