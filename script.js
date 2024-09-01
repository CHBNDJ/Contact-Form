const signUp = document.querySelector('.container');
const form = document.querySelector('.fields');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const queryType = document.getElementById('queryType');
const message = document.getElementById('message');
const submitBtn = document.querySelector('.submitBtn');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const input = document.querySelectorAll('input');
const successMessage = document.querySelector('.success-message-container');


const errorFirstName = document.getElementById('first-name-error');
const errorLastName = document.getElementById('last-name-error');
const errorMail = document.getElementById('email-error');
const queryTypeError = document.getElementById('query-type-error');
const msgError = document.getElementById('message-error');
const checkedError = document.getElementById('checked-error');



submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let isValid = true;  
    
   


    // Vérification du prénom
    if (firstName.value === '') {
        firstName.style.border = '1px solid #FF7979';
        errorFirstName.textContent = 'This field is required';
        errorFirstName.classList.add('show');
        isValid = false;
    } else {
        firstName.style.border = '';
        errorFirstName.textContent = '';
        errorFirstName.classList.remove('show');
    }

    // Vérification du nom de famille
    if (lastName.value === '') {
        lastName.style.border = '1px solid #FF7979';
        errorLastName.textContent = 'This field is required';
        errorLastName.classList.add('show');
        isValid = false;
    } else {
        lastName.style.border = '';
        errorLastName.textContent = '';
        errorLastName.classList.remove('show');
    }

    // Vérification de l'email
    if (!email.value.match(emailRegex)) {
        email.style.border = '1px solid #FF7979';
        errorMail.textContent = 'Please enter a valid email address';
        errorMail.classList.add('show');
        isValid = false;
    } else {
        email.style.border = '';
        errorMail.textContent = '';
        errorMail.classList.remove('show');
    }

    // Vérification du type de requête
    if (!generalEnquiry.checked && !supportRequest.checked) {
        queryTypeError.textContent = 'Please select a query type';
        queryTypeError.classList.add('show');
        isValid = false;
    } else {
        queryTypeError.textContent = '';
        queryTypeError.classList.remove('show');
    }

    // Vérification du message
    if (message.value === '') {
        message.style.border = '1px solid #FF7979';
        msgError.textContent = 'This field is required';
        msgError.classList.add('show');
        isValid = false;
    } else {
        message.style.border = '';
        msgError.textContent = '';
        msgError.classList.remove('show');
    }

    if(!checked.checked) {
        checkedError.textContent = 'To submit this form, please consent to being contacted';
        checkedError.classList.add('show');
        isValid = false;
    } else {
        checkedError.textContent = '';
        checkedError.classList.remove('show');
    }



    firstName.addEventListener('click', () => {
        firstName.style.border = '';
        errorFirstName.textContent = '';
    })
    
    lastName.addEventListener('click', () => {
        lastName.style.border = '';
        errorLastName.textContent = '';
    })
    
    email.addEventListener('click', () => {
        email.style.border = '';
        errorMail.textContent = '';
    })
    
    message.addEventListener('click', () => {
        message.style.border = '';
        msgError.textContent = '';
    })

    
    if (!isValid) {
       signUp.classList.add('expanded');
       form.classList.add('form-expanded')
    } else {
       signUp.classList.remove('expanded');
       form.classList.remove('form-expanded');
       successMessage.style.display = 'block';
       


        firstName.value = '';
        lastName.value = '';
        email.value = '';
        message.value = '';
        generalEnquiry.checked = false;
        supportRequest.checked = false;
        checked.checked = false;

        signUp.classList.add('disabled');
       
    }
    

   
});








/* submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let isValid = false;

 if (firstName.value === '') {
        firstName.style.border = '1px solid #FF7979';
        errorFirstName.textContent = 'This field is required';
        errorFirstName.classList.add('show');
        isValid = true;
    } else {
        firstName.style.border = '';
        errorFirstName.textContent = '';
        errorFirstName.classList.remove('show');
    }

    if (lastName.value === '') {
        lastName.style.border = '1px solid #FF7979';
        errorLastName.textContent = 'This field is required';
        errorLastName.classList.add('show');
        isValid = true;
    } else {
        lastName.style.border = '';
        errorLastName.textContent = '';
        errorLastName.classList.remove('show');

    }

    if (email.value.match(emailRegex)) {
        email.style.border = '';
        errorMail.textContent = '';
        errorMail.classList.remove('show');
    
    } else {
        email.style.border = '1px solid #FF7979';
        errorMail.textContent = 'Please enter a valid email address';
        errorMail.classList.add('show');
        isValid = true;
    }

    if (!generalEnquiry && !supportRequest) {
        queryTypeError.textContent = 'Please select a query type';
        queryTypeError.classList.add('show');
        isValid = false;
    } else {
        queryTypeError.textContent = '';
        queryTypeError.classList.remove('show');
    }

    if (message.value === '') {
        message.style.border = '1px solid #FF7979';
        msgError.textContent = 'This field is required';
        msgError.classList.add('show');
        isValid = true;
    }





}) 














*/


