function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

let intervalId;

document.querySelector('[data-start]').addEventListener('click', startColorChange);
document.querySelector('[data-stop]').addEventListener('click', stopColorChange);

function startColorChange() {
    intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopColorChange() {
    clearInterval(intervalId);
}

function changeBackgroundColor() {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
}


