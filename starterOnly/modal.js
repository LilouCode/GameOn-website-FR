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
const firstNameError = document.getElementById ("first-name_error")
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

let nameRegExp = new RegExp ("/^[a-zA-Z-À-ÖØ-öø-ÿ]+$/");
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


form.addEventListener("submit", function validate (e) {
    // validation du prénom
    // si le prénom contient des caractères non valides
    if ((nameRegExp.test(firstName) == false)) {
      e.preventDefault();
      firstNameError.innerHTML = "Vous devez saisir un nom valide";
      firstNameError.style.color = "#e54858";
      firstNameError.style.fontSize = "0.4em";
      //si le prénom est inférieur à 2 caractères
    } else if (firstName.value.trim > 2) {
      e.preventDefault();
      firstNameError.innerHTML = "Vous devez saisir un minimum de 2 caractère pour ce champs";
      firstNameError.style.color = "#e54858";
      firstNameError.style.fontSize = "0.4em";
      //sinon ok:
    } else {
      $("#submit").unbind('click').click();
    }

    //validation du nom
    //si le nom contient des caractères non valides
    if ((nameRegExp.test(lastName) == false)) {
      e.preventDefault();
      lastNameError.innerHTML = "Vous devez saisir un nom valide";
      lastNameError.style.color = "#e54858";
      lastNameError.style.fontSize = "0.4em";
      //si le nom est inférieur à 2 caractères
    } else if (firstName.value.trim > 2) {
      e.preventDefault();
      lastNameError.innerHTML = "Vous devez saisir un minimum de 2 caractère pour ce champs";
      lastNameError.style.color = "#e54858";
      lastNameError.style.fontSize = "0.4em";
      //sinon ok:
    } else {
      $("#submit").unbind('click').click();
    }

    //validation de la date de naissance
    let regExpDate = new RegExp ("/^([0-9]{2})|([0-9]{2})|([0-9]{4})$/");

    if (birthdate.value === "" || (regExpDate.test(birthdate) == false)) {
      birthdateError.innerHTML= "Veuillez reinseignez ce champs";
      birthdateError.style.color = "red";
    }
    //validation de l'e-mail

  });