import refs from './refs.js';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let isActive = false;
let intervalId = null;

refs.startBtn.addEventListener('click', startBtnHandler);
refs.stopBtn.addEventListener('click', stopBtnHandler);

function startBtnHandler() {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    const currentColor = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[currentColor];
  }, 1000);
}

function stopBtnHandler() {
  clearInterval(intervalId);
  isActive = false;
  refs.body.style.backgroundColor = '#FFFFFF';
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
