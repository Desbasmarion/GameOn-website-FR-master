function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");
const btnValidate = document.querySelector(".btn-submit");


// DOM Elements Form
const formModal = document.querySelector("#formulaire");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
let checkboxes = document.querySelectorAll(".checkbox-input");
let arrayCheckboxes = Array.from(checkboxes);
const elementsForm = document.querySelectorAll("div.formData > input");
const checkboxConditions = document.getElementById("checkbox1");

//Regex
const regexName = /^[a-zA-Z-\s]+$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-_]+$/;
const regexNombreTournois = /^[0-9]+$/;

// DOM Elements error
const errorMessageFirst = document.querySelector(".errorFirstName");
const errorMessageLast = document.querySelector(".errorLastName");
const errorMessageEmail = document.querySelector(".errorEmail");
const errorMessageBirthdate = document.querySelector(".errorBirthdate");
const errorMessageQuantity = document.querySelector(".errorQuantity");
const errorMessageSelection = document.querySelector(".errorSelection");
const errorMessagesAll = document.querySelectorAll("div.formData > span");
const errorMessageConditions = document.querySelector(".errorConditions");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form on click
closeModal.addEventListener("click", (e)=>{
  modalbg.style.display = "none";

  for (i=0; i<errorMessagesAll.length; i++){
    errorMessagesAll[i].textContent = "";
  };

  for (i=0; i<elementsForm.length; i++){
    if (elementsForm[i].value){
      elementsForm[i].value = "";
    };
  }
  for (i=0; i<arrayCheckboxes.length; i++){
    if (arrayCheckboxes[i].checked){
      arrayCheckboxes[i].checked = false;
    }
  }
  if (checkboxConditions.checked){
    checkboxConditions.checked = false;
  }
});

// Validation elements Form
formModal.addEventListener('submit', validate);

//Verification de tous les éléments du formulaire 
function validate(e){
  e.preventDefault();
  if (firstName.value == ""){
    errorMessageFirst.textContent = "Prénom manquant";
    errorMessageFirst.style.fontSize = "12px";
    errorMessageFirst.style.color = "red";
  } else if(regexName.test(firstName.value) == false){
      errorMessageFirst.textContent = "Format incorrect - Veuillez entrer 2 caractères ou plus pour ce champ";
      errorMessageFirst.style.fontSize = "12px";
      errorMessageFirst.style.color = "red";
  } else{
      errorMessageFirst.textContent = "";
  }
  if (lastName.value == ""){
    errorMessageLast.textContent = "Nom manquant";
    errorMessageLast.style.fontSize = "12px";
    errorMessageLast.style.color = "red";
  } else if(regexName.test(lastName.value) == false){
      errorMessageLast.textContent = "Format incorrect - Veuillez entrer 2 caractères ou plus pour ce champ";
      errorMessageLast.style.fontSize = "12px";
      errorMessageLast.style.color = "red";
  } else{
    errorMessageLast.textContent = "";
  }
  if (email.value == ""){
    errorMessageEmail.textContent = "Email manquant";
    errorMessageEmail.style.fontSize = "12px";
    errorMessageEmail.style.color = "red";
  } else if(regexEmail.test(email.value) == false){
      errorMessageEmail.textContent = "Adresse e-mail invalide";
      errorMessageEmail.style.fontSize = "12px";
      errorMessageEmail.style.color = "red";
  } else{
    errorMessageEmail.textContent = "";
  }
  if (birthdate.value == ""){
    errorMessageBirthdate.textContent = "Date d'anniversaire manquante";
    errorMessageBirthdate.style.fontSize = "12px";
    errorMessageBirthdate.style.color = "red";
  } else{
    errorMessageBirthdate.textContent = "";
  }
  if (quantity.value == ""){
    errorMessageQuantity.textContent = "Nombre de tournois manquants";
    errorMessageQuantity.style.fontSize = "12px";
    errorMessageQuantity.style.color = "red";
  } else if(regexNombreTournois.test(quantity.value) == false){
      errorMessageQuantity.textContent = "format incorrect";
      errorMessageQuantity.style.fontSize = "12px";
      errorMessageQuantity.style.color = "red";
  } else{
    errorMessageQuantity.textContent = "";
  }
  if (arrayCheckboxes.some(check)){
    errorMessageSelection.textContent = "";
  } else {
    errorMessageSelection.textContent = "Veuillez choisir au moins une ville";
    errorMessageSelection.style.fontSize = "12px";
    errorMessageSelection.style.color = "red";
  }
  if (checkboxConditions.checked){
    errorMessageConditions.textContent ="";
  }else if (checkboxConditions.checked == false){
    errorMessageConditions.textContent = "Veuillez acceptez les termes et conditions";
    errorMessageConditions.style.fontSize = "12px";
    errorMessageConditions.style.color = "red";
  }
  if (!firstName.value == "" && !regexName.test(firstName.value) == false && !lastName.value == "" &&!regexName.test(lastName.value) == false && !email.value == "" && !regexEmail.test(email.value) == false &&!birthdate.value == "" && !quantity.value == "" && !regexNombreTournois.test(quantity.value) == false &&arrayCheckboxes.some(check)&&checkboxConditions.checked){

    let contentForm = document.querySelector(".mainFormData");

    contentForm.textContent = "Merci ! Votre réservation a été reçue.";

    btnValidate.value = "Fermer";

    btnValidate.addEventListener("click",e =>{
      modalbg.style.display = "none";
    });

  }
  
}

//Boucle pour vérification de chaques checkboxes
function check(){
  for (let i=0; i<checkboxes.length; i++){
    if (checkboxes[i].checked == true){
      return true;
    }
  }
}




/*
//test boucle vérification de tous les éléments du formulaire
let elementsForm = document.querySelectorAll("div.formData > input");
let errorMessages = document.querySelectorAll("div.formData > span");

formModal.addEventListener('submit', validate);

function validate(e){
  for (let i=0; i<elementsForm.length;i++){
    if (elementsForm[i].value == true){
      return true;
    }else{
      e.preventDefault();
      errorMessages.textContent = "KO";
    }
  }
}
*/
