function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyREf = document.querySelector('body');
const btnChangeColor = document.querySelector(".change-color");
const spanREf = document.querySelector(".color");
const handleClick = event => {
 bodyREf.style.backgroundColor= getRandomHexColor();
 spanREf.textContent = bodyREf.style.backgroundColor;
};

btnChangeColor.addEventListener('click', handleClick);
