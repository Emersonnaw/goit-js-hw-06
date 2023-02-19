const inputRef = document.querySelector('#name-input');


const titleRef = document.querySelector("#name-output");
titleRef.textContent = "Anonymous";




inputRef.addEventListener("input", (ever) => {
   titleRef.textContent = ever.currentTarget.value;
});
