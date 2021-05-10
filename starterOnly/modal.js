function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*exemple fonction pour prenom manquant + message d'erreur 

++var validation = document.getElementById('bouton_envoi');
++var prenom = document.getElementById('prenom');
var prenom_m = document.getElementById('prenom_manquant');

var prenom_validation = /^[a-zA-Z][a-z]+([-'\s][a-zA-Z]+)?/;

++validation.addEventListener('click', validate);

function validate(e){
  if(prenom.validity.valueMissing){    ==> prenom = id du champs obligatoire
      e.preventDefault();
      prenom_manquant.textContent = "Prénom manquant";  ==> prenom_manquant = span à rajouter pour message d'erreur
  }else if(prenom_validation.test(prenom.value) == false){
      e.preventDefault();
      prenom_m.textContent = "Format incorrect"
  }else{
           ==> laisse vide pour dire que c'est valide et laisser l'envoi du formulaire se faire é 
  }
}
*/

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");
const btnValidate = document.querySelector(".btn-submit");

// DOM Elements Form
const prenom = document.querySelector("#first");
const nom = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");

// Récupération span pour message d'erreur 
const alertPrenom = document.querySelector(".alert_prenom");
const alertNom = document.querySelector(".alertNom");
const alertEmail = document.querySelector(".alertEmail");
const alertDate = document.querySelector(".alertDate");
const alertQuantity = document.querySelector(".alertQuantity");

// Conditions de validation des élements
const prenomRegex = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form on click
closeModal.addEventListener("click", (e)=>{
  modalbg.style.display = "none";
});

// Ecoute de l'évènement au moment de l'envoi
btnValidate.addEventListener("click", validate);

// Validation des élements du formulaire 
function validate(event){
  if (prenom.validity.valueMissing){
    event.preventDefault();
    alertPrenom.textContent = "prenom manquant";
  } else if (prenomRegex.test(prenom.value) == false){
    event.preventDefault();
    alertPrenom.textContent = "Format incorrect";
    alertPrenom.style.color = "red";
  } else{

  }
}
function validate(event){
  if (nom.validity.valueMissing){
    event.preventDefault();
  }
}
function validate(event){
  if (email.validity.valueMissing){
    event.preventDefault();
  }
}
function validate(event){
  if (birthdate.validity.valueMissing){
    event.preventDefault();
  }
}
function validate(event){
  if (quantity.validity.valueMissing){
    event.preventDefault();
  }
}
function check(event){
  if (!checkboxes.checked){
    event.preventDefault;
  }
}
