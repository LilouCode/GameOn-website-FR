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
const locations = document.querySelectorAll("locations");
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
firstName.addEventListener("change", function () {
  validFirstName(this);
});
// Ecouter la modification du nom
lastName.addEventListener("change", function () {
  validLastName(this);
});
//  Ecouter la modification de l'e-mail
email.addEventListener("change", function () {
  validEmail(this);
});
// Ecouter la modification de la date de naissance
birthdate.addEventListener("change", function () {
  validBirthdate(this);
});
//Ecouter la modification du nombre de tournois -input ("quantity")
quantity.addEventListener("change", function () {
  validQuantity(this);
});
//Ecouter la modification des localisations
location1.addEventListener("change", function () {
  validLocations(this);
});
location2.addEventListener("change", function () {
  validLocations(this);
});
location3.addEventListener("change", function () {
  validLocations(this);
});
location4.addEventListener("change", function () {
  validLocations(this);
});
location5.addEventListener("change", function () {
  validLocations(this);
});
location6.addEventListener("change", function () {
  validLocations(this);
});
// Ecouter la modifictation de la checkbox conditions d'utilisation
checkbox1.addEventListener("change", function () {
  validCheckbox1(this);
});
// Ecouter la soumission du formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    validFirstName(firstName) &&
    validLastName(lastName) &&
    validEmail(email) &&
    validBirthdate(birthdate) &&
    validQuantity(quantity) &&
    validLocations(locations) &&
    validCheckbox1(checkbox1)
  ) {
    form.submit();
  }
});
// ********************** Validation du prénom **********************
const validFirstName = function (firstName) {
  let msg;
  let valid = false;
 // creation de la reg exp pour la validation du prénom 
  let firstNameRegExp = new RegExp("^[a-zA-Z-À-ÖØ-öø-ÿ]+$", "g");
  //******* Doit contenir au minimum 2 caractères
  if (firstName.value.length < 2) {
    msg = "Vous devez saisir un minimum de 2 caractères pour ce champs";
  }
  // ******* Doit contenir uniquement des caractères valides 
  else if (!firstNameRegExp.test(firstName.value)) {
    msg = "Veuillez renseigner ce champs uniquement avec des caractères autorisés";
  } 
  //******* Prénom valide
  else {
    msg = "Ce champs est valide";
    valid = true;
  }
  //******* Affichage
  //recuperation de la balise span pour le message d'erreur
  let firstNameError = document.getElementById("first-name_error");
  if (valid) {
    firstNameError.innerHTML = "";
    firstNameError.classList.remove("text-error");
    firstName.classList.remove("text-control--error");
    return true;
  } else {
    firstNameError.innerHTML = msg;
    firstNameError.classList.add("text-error");
    firstName.classList.add("text-control--error");
    return false;
  }
};

// ********************** Validation du nom **********************
const validLastName = function (lastName) {
  let msg;
  let valid = false;

  //******* Doit contenir uniquement des caractères valides
  //creation de la reg exp pour la validation du prénom
  let lastNameRegExp = new RegExp("^[a-zA-Z-À-ÖØ-öø-ÿ]+$", "g");
  //test de l'expression reguliere
  if (!lastNameRegExp.test(lastName.value)) {
    msg = "Veuillez renseigner ce champs uniquement avec des caractères autorisés";
  }
  //******* Doit contenir au minimum 2 caractères
  else if (lastName.value.length < 2) {
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
  if (valid) {
    lastNameError.innerHTML = "";
    lastNameError.classList.remove("text-error");
    lastName.classList.remove("text-control--error");
    return true;
  } else {
    lastNameError.innerHTML = msg;
    lastNameError.classList.add("text-error");
    lastName.classList.add("text-control--error");
    return false;
  }
};

// ********************** Validation de l'email **********************
const validEmail = function (email) {
  //creation de la reg exp pour la validation de l'email
  let emailRegExp = new RegExp("^([a-zA-Z0-9_.-]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-zA-Z0-9]{2,3})$", "g");
  //test de l'expression reguliere
  let emailTest = emailRegExp.test(email.value);
  // récupération de la balise span pour le message d'erreur
  let emailError = document.getElementById("email_error");

  if (emailTest) {
    emailError.innerHTML = "";
    emailError.classList.remove("text-error");
    email.classList.remove("text-control--error");
    return true;
  } else {
    emailError.innerHTML = "Veuillez renseigner une adresse e-mail valide";
    emailError.classList.add("text-error");
    email.classList.add("text-control--error");
    return false;
  }
};

// ********************** Validation de la date de naissance **********************
const validBirthdate = function (birthdate) {
  //creation de la reg exp pour la validation de la date de naissance
  let birthdateRegExp = new RegExp("^([0-9]{2})|([0-9]{2})|([0-9]{4})$", "g");
  //test de l'expression reguliere
  let birthdateTest = birthdateRegExp.test(birthdate.value);
  // récupération de la balise span pour le message d'erreur
  let birthdateError = document.getElementById("birthdate_error");

  if (birthdateTest) {
    birthdateError.innerHTML = "";
    birthdateError.classList.remove("text-error");
    birthdate.classList.remove("text-control--error");
    return true;
  } else {
    birthdateError.innerHTML = "Veuillez renseigner ce champs";
    birthdateError.classList.add("text-error");
    birthdate.classList.add("text-control--error");
    return false;
  }
};

// ********************** Validation quantity **********************
const validQuantity = function (quantity) {
  // récupération de la balise span pour le message d'erreur
  let quantityError = document.getElementById("quantity_error");

  if (/[0-99]/.test(quantity.value) && quantity.value.trim != "") {
    quantityError.innerHTML = "";
    quantityError.classList.remove("text-error");
    quantity.classList.remove("text-control--error");
    return true;
  } else {
    quantityError.innerHTML = "Veuillez renseigner ce champs";
    quantityError.classList.add("text-error");
    quantity.classList.add("text-control--error");
    return false;
  }
};

// ********************** Validation locations **********************

const validLocations = function (locations) {
  // récupération de la balise span pour le message d'erreur
  let locationsError = document.getElementById("locations_error");

  let validQuantityCity = function (quantity) {
    if (quantity.value > 0) {
      return true;
    } else {
      return false;
    }
  };

  if (
    validQuantityCity &&
    (location1.checked == true ||
      location2.checked == true ||
      location3.checked == true ||
      location4.checked == true ||
      location5.checked == true ||
      location6.checked == true)
  ) {
    locationsError.innerHTML = "";
    locationsError.classList.remove("text-error");
    return true;
  } else {
    locationsError.innerHTML = "Veuillez remplir ce champs";
    locationsError.classList.add("text-error");
    return false;
  }
};

// ********************** Validation checkbox1 **********************
const validCheckbox1 = function (checkbox1) {
  let checkbox1Error = document.getElementById("checkbox1_error");
  if (checkbox1.checked) {
    checkbox1Error.innerHTML = "";
    checkbox1Error.classList.remove("text-error");
    checkbox1.classList.remove("text-control--error");
    return true;
  } else {
    checkbox1Error.innerHTML = "Vous devez accepter les conditions d'utilisation";
    checkbox1Error.classList.add("text-error");
    checkbox1.classList.add("text-control--error");
    return false;
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
