const startButtonEl = document.querySelector('[data-start]');
const stopButtonEl = document.querySelector('[data-stop]');

let intervalId = null;

function onChangeColor() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    startButtonEl.classList.add("disabled")
  }, 1000);
};

function onStopChangeColor() {
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startButtonEl.addEventListener('click', onChangeColor);
stopButtonEl.addEventListener('click', onStopChangeColor)