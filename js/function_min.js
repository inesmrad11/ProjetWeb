'use strict';



/**
 * Add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 *TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

navToggler.addEventListener("click", toggleNavbar);


const header = document.querySelector("[data-header]");

const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);



//verif formulaire
document.addEventListener("DOMContentLoaded", function () {
  // Variables pour stocker les données du formulaire
  var nameValue, emailValue, subjectValue, messageValue;

  // Fonction pour vérifier le nom
  function validateName() {
    var nameInput = document.getElementById("name");
    nameValue = nameInput.value.trim();

    if (nameValue === "") {
      alert("Please enter your name.");
      return false;
    }

    return true;
  }

  // Fonction pour vérifier l'email
  function validateEmail() {
    var emailInput = document.getElementById("email");
    emailValue = emailInput.value.trim();

    // Expression régulière pour valider l'email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "" || !emailRegex.test(emailValue)) {
      alert("Please enter a valid email address");
      return false;
    }

    return true;
  }

  // Fonction pour vérifier le sujet
  function validateSubject() {
    var subjectInput = document.getElementById("subject");
    subjectValue = subjectInput.value.trim();

    if (subjectValue === "") {
      alert("Please enter the subject.");
      return false;
    }

    return true;
  }

  // Fonction pour vérifier le message
  function validateMessage() {
    var messageInput = document.getElementById("message");
    messageValue = messageInput.value.trim();

    if (messageValue === "") {
      alert("Please enter your message.");
      return false;
    }

    return true;
  }

  // Fonction de validation globale du formulaire
  function validateForm() {
    return (
      validateName() &&
      validateEmail() &&
      validateSubject() &&
      validateMessage()
    );
  }






  

// Function to submit the form
function submitForm() {
  if (!validateForm()) {
    alert("Formular validation failed. Please check your entries.");
  } else {
    // Submit the form using the form's id
    document.getElementById("contactForm").submit();
  }
}

// Event listener for the custom submit button
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  submitForm(); // Call the function to submit the form
});

// Event listener for the form's submit button
var form = document.getElementById("contactForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  submitForm(); // Call the function to submit the form
});

});