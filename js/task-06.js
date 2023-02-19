const inputRef = document.querySelector('#validation-input');
const dataLength = document.querySelector('[data-length]');
const keybordClick = (event) => {
  if (dataLength.dataset.length <= inputRef.value.length){


   event.currentTarget.classList.remove("invalid");
      event.currentTarget.classList.add("valid");
} else {
   event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
      
};  
};
inputRef.addEventListener("blur", keybordClick);
