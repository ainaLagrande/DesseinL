"use strict"

//*****************************PROGRESSBAR LECTURE***************************************

 const progressBar = document.querySelector('.progressBarLecture');

 window.addEventListener('scroll',lectureProgress);

 function lectureProgress(e) {

    //on recupere la taille de scroll et la taille de la fenetre 
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percent = windowScroll / windowHeight * 100;

    progressBar.style.width = percent + '%';
 }
 // import lectureProgress from 'layout.js';

//*****************************NAVBAR***************************************

let toggle = document.querySelector('.toggle');
let button = document.querySelector('.btn_menu');
let nav = document.querySelector('nav');

button.addEventListener('click', () => {

  toggle.classList.toggle('active-toggle');
  nav.classList.toggle('openNav');
});

//*****************************ABOUT SECTION ***************************************

const slide = document.querySelector('.aboutSection'); 


window.addEventListener('scroll', ()=> {  


	if(window.scrollY>2100) { 
		slide.classList.add('aboutAnimation');
	}
	else {
		slide.classList.remove('aboutAnimation');
	}
});


//*****************************FORM ANIMATION ***************************************

const homeForm = document.querySelector('.homeForm');
const input = document.querySelectorAll('.formLabel');


document.addEventListener('input', function(e) {
    
    if(e.target.value !== "") {
        e.target.parentNode.classList.add('activeInput');
    } 
    else if (e.target.value === "") {
        e.target.parentNode.classList.remove('activeInput');
    }

});
//*****************************FORM VALIDATION ***************************************

let formButton = document.querySelector('.homePageFormButton');

let lastName = document.querySelector('.nameInput');
let lastNameError = document.querySelector('.lastNameError');
let regexName = /^([a-zA-Z ]+)$/;


let email = document.querySelector('.emailInput');
let emailError = document.querySelector('.emailError');
let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


let phone = document.querySelector('.phoneInput');
let phoneError = document.querySelector('.phoneError');
let regexPhone =  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;


let textarea = document.querySelector('.textareaInput');
let textareaError = document.querySelector('.textareaError');

// let formValid = document.querySelector('.ifFormIsValid');

formButton.addEventListener('click',validation);

function validation (e)
{
    //***********************************EMPTY VALIDATION*****************
    if (lastName.validity.valueMissing && email.validity.valueMissing 
        && textarea.validity.valueMissing&& phone.validity.valueMissing) {

        event.preventDefault();

        lastNameError.textContent = '*Nom manquant*';
        lastNameError.style.color = 'red';

        emailError.textContent = '*Email manquant*';
        emailError.style.color = 'red';

        phoneError.textContent = '*Numéro manquant*';
        phoneError.style.color = 'red';

        textareaError.textContent = '*Veuillez remplir le champ*';
        textareaError.style.color = 'red';
    }
    
    //***********************************CARACTERES VALIDATION*****************

    if (regexName.test(lastName.value) === false) {
        event.preventDefault();

        lastNameError.textContent = '*Nom Ivalide*';
        lastNameError.style.color = 'red';
    }
    if (regexEmail.test(email.value) === false) {
        event.preventDefault();

        emailError.textContent = 'Email invalide';
        emailError.style.color = 'red';
    }
    if (regexPhone.test(phone.value) === false) {
        event.preventDefault();

        phoneError.textContent = 'Numéro invalide';
        phoneError.style.color = 'red';
    }
    else
    {
    	alert("Merci!J'ai bien reçu votre message")
        // formValid.style.backgroundColor = "red";
    }

}

//*****************************ARROW UP ***************************************


const arrowUpButton = document.querySelector('.arrowUp');

arrowUpButton.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})