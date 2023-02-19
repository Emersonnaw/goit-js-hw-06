const inputRef = document.querySelector('#name-input');


const titleRef = document.querySelector("#name-output");
titleRef.textContent = "Anonymous";




inputRef.addEventListener("input", (ever) => {
   if(ever.currentTarget.value === ""){
     return titleRef.textContent = "Anonymous";
  }
   
    titleRef.textContent = ever.currentTarget.value;
});
