const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueREf = document.querySelector("#value");
let counterValue = 0;

const decrementFunc = () =>{
   return valueREf.textContent = counterValue -= 1;
};


const incrementFunc = () => {
  return  valueREf.textContent = counterValue += 1; };


 decrementButton.addEventListener('click', decrementFunc);
 incrementButton.addEventListener('click', incrementFunc);
