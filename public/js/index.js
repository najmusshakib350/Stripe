import '@babel/polyfill';

import {frontendStripe,mainFrontend} from './stripe';

const formSubmit=document.querySelector('.form-submit');

if(formSubmit){
    frontendStripe();
    formSubmit.addEventListener('submit', (event) =>{
        event.preventDefault();
        const email=document.getElementById('email').value;
        const name=document.getElementById('name').value;
        mainFrontend(email,name);
    });
}


