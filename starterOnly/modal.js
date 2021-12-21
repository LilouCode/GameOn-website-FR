function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
//ajouts
// creations de la constante closeModal
const closeModal = document.querySelectorAll(".close");
//Liaison des labels
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

let form = document.getElementById("form");


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  form.style.display = "block";
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal form
// function removeModal() {
const removeModal = () => {
  modalbg.style.display = "none";
};

// close modal event
closeModal.forEach((close) => close.addEventListener("click", removeModal));


// ******************************* Les ecoutes **********************
// Ecouter la modification du prénom
firstName.addEventListener("change", function() {
  validFirstName(this);
});
// Ecouter la modification du nom
lastName.addEventListener("change", function() {
  validLastName(this);
});
//  Ecouter la modification de l'e-mail
email.addEventListener("change", function () {
  validEmail(this);
})
// ********************** Validation du prénom **********************
const validFirstName = function (firstName) {
  let msg;
  let valid = false;

  //******* Doit contenir uniquement des caractères valides *****
  //creation de la reg exp pour la validation du prénom
  let firstNameRegExp = new RegExp ("^[a-zA-Z-À-ÖØ-öø-ÿ]+$","g");
  //test de l'expression reguliere
  if(!firstNameRegExp.test(firstName.value)){
    msg = "Veuillez renseigner ce champs uniquement avec des caractères autorisés";
  }
  //******* Doit contenir au minimum 2 caractères *****
  else if (firstName.value.length < 2 ) {
    msg = "Vous devez saisir un minimum de 2 caractères pour ce champs";
  }
  //******* Prénom valide *****
  else {
    msg = "Ce champs est valide";
    valid = true;
  }
  //******* Affichage *****
  //recuperation de la balise span pour le message d'erreur
  let firstNameError = document.getElementById("first-name_error");
  if (valid){
    firstNameError.innerHTML = "";
    firstNameError.classList.remove("text-error");
    firstName.classList.remove("text-control--error")
  } else {
    firstNameError.innerHTML = msg;
    firstNameError.classList.add("text-error");
    firstName.classList.add("text-control--error");
  }
};

// ********************** Validation du nom **********************
const validLastName = function (lastName) {
  let msg;
  let valid = false;

  //******* Doit contenir uniquement des caractères valides *****
  //creation de la reg exp pour la validation du prénom
  let lastNameRegExp = new RegExp ("^[a-zA-Z-À-ÖØ-öø-ÿ]+$","g");
  //test de l'expression reguliere
  if(!lastNameRegExp.test(lastName.value)){
    msg = "Veuillez renseigner ce champs uniquement avec des caractères autorisés";
  }
  //******* Doit contenir au minimum 2 caractères *****
  else if (lastName.value.length < 2 ) {
    msg = "Vous devez saisir un minimum de 2 caractères pour ce champs";
  }
  //******* Nom valide *****
  else {
    msg = "Ce champs est valide";
    valid = true;
  }
  //******* Affichage *****
  //recuperation de la balise span pour le message d'erreur
  let lastNameError = document.getElementById("last-name_error");
  if (valid){
    lastNameError.innerHTML = "";
    lastNameError.classList.remove("text-error");
    lastName.classList.remove("text-control--error")
  } else {
    lastNameError.innerHTML = msg;
    lastNameError.classList.add("text-error");
    lastName.classList.add("text-control--error");
  }
};

// ********************** Validation de l'email **********************
const validEmail = function (email) {
  //creation de la reg exp pour la validation de l'email
  let emailRegExp = new RegExp ("^([a-zA-Z0-9_.-]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-zA-Z0-9]{2,3})$", "g");
  //test de l'expression reguliere
  let emailTest = emailRegExp.test(email.value);
  // récupération de la balise span pour le message d'erreur
  let emailError = document.getElementById("email_error");

  if (emailTest) {
    emailError.innerHTML= "";
    emailError.classList.remove("text-error");
    email.classList.remove("text-control--error");
  }
  else{
    emailError.innerHTML= "Veuillez renseigner une adresse e-mail valide";
    emailError.classList.add("text-error");
    email.classList.add("text-control--error");
  }
};



// form.addEventListener("submit", function validate (e) {
  
//   // annulation du comportement par défaut  
//   e.preventDefault();

//   // validation du prénom
//     const firstNameError = document.getElementById ("first-name_error");
    
//     //si le prénom est inférieur à 2 caractères
//     if (firstName.value.trim = "" || firstName.value.trim < 2) {
//       firstNameError.innerHTML = "Vous devez saisir un minimum de 2 caractère pour ce champs";
//       firstNameError.addc
//     }
    
//     // si le prénom contient des caractères non valides
//     else if (!nameRegExp.test(firstName.value)) {
//       firstNameError.innerHTML = "Vous devez saisir un nom valide";
//       firstNameError.style.color = "#e54858";
//       firstNameError.style.fontSize = "0.4em";
//     }

//     else{
//       firstNameValidation = true;
//     };

//     //validation du nom
//     const lastNameError = document.getElementById ("last-name_error")
//     //si le nom contient des caractères non valides
//     if (!nameRegExp.test(lastName.value)) {
//       lastNameError.innerHTML = "Vous devez saisir un nom valide";
//       lastNameError.style.color = "#e54858";
//       lastNameError.style.fontSize = "0.4em";
//       //si le nom est inférieur à 2 caractères
//     } else if (firstName.value.length < 2) {
//       lastNameError.innerHTML = "Vous devez saisir un minimum de 2 caractère pour ce champs";
//       lastNameError.style.color = "#e54858";
//       lastNameError.style.fontSize = "0.4em";
//     } else {
//       validationLastName = true;
//     };

//     //validation de l'e-mail
//     const emailError = document.getElementById ("email_error");
//     let regExpEmail = new RegExp ("^([a-zA-Z0-9_.-]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-zA-Z0-9]{2,3})$", "g");

//     if (!regExpEmail.test(email)) {
//       emailError.innerHTML = "Veuillez renseigner un email valide";
//     } else if (email.value.trim ="") {
//       emailError.innerHTML ="Veuiller renseigner ce champs";
//     } else {
//       validationEmail = true;
//     };

//     //validation de la date de naissance
//     const birthdateError = document.getElementById ("birthdate_error");
//     let regExpDate = new RegExp ("^([0-9]{2})|([0-9]{2})|([0-9]{4})$", "g");

//     if (birthdate.value === "" || regExpDate.test(birthdate)) {
//       birthdateError.innerHTML= "Veuillez renseigner ce champs";
//       birthdateError.style.color = "red";
//     } else{
//       validationBirthdate = true;
//     }; 

//     //validation du nombre de tournois
//     let quantityError = document.getElementById ("quantity_error");
//     if (quantity.value= ""){
//       quantityError.innerHTML = "Veuiller renseigner ce champs";
//     } else {
//       validationQuantity = true;
//     };

//     // Envoi et validation du formulaire
//     if ((validationLastName == true) && (validationFirstName == true) && (validationEmail== true) 
//       && (validationBirthdate== true) && (validationQuantity== true)) {
//       $("#submit").unbind('click').click();
//     }

//   });