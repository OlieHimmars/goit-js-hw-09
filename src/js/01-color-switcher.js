function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button');
//const stopBtn = document.querySelector("button [data-stop]");  чому так не працює?
let timerColor = null;
startBtn.nextElementSibling.disabled = true;

startBtn.addEventListener('click', onStart);
startBtn.nextElementSibling.addEventListener('click', onStop);

function onStart() {
    document.body.style.background = getRandomHexColor();
    timerColor = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
    startBtn.nextElementSibling.disabled = false;
};

function onStop() {
    clearInterval(timerColor);
    startBtn.disabled = false;
    startBtn.nextElementSibling.disabled = true;
};