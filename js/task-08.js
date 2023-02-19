const form = document.querySelector(".login-form");
form.addEventListener('submit', onFormSubmit);
function onFormSubmit (event){
   event.preventDefault();
   if (event.currentTarget.elements.email.value && event.currentTarget.elements.password.value) {
     const  formElements = event.currentTarget.elements;
     const mail = formElements.email.value;
     const password = formElements.password.value;
     const formData = {mail, password};
     console.log(formData);
     event.currentTarget.reset();
   } else {
     return  alert('All fields must be filled');
   };
};

