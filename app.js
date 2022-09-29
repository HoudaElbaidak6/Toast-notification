let btn = document.querySelector("button");
let container = document.querySelector(".container");
let phraseOptions = [
  "You clicked me ",
  "Quit clicking me 😠",
  "Thank you for clicking me !",
  "Javascript is so much fun",
  "I love coding 💗",
  "Toast notifications for life",
];

btn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  let notification = document.createElement("p");
  notification.classList.add("notifi");
  notification.textContent = randomPhrase();
  container.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function randomPhrase() {
  let randomNumber = Math.floor(Math.random() * phraseOptions.length);
  let randomSentence;
  for (let i = 0; i < phraseOptions.length; i++) {
    randomSentence = phraseOptions[randomNumber];
    console.log(randomSentence);
  }
  return randomSentence;
}
