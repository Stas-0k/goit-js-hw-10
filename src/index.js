import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list')

input.addEventListener('input', debounce(inputEvent, DEBOUNCE_DELAY));

function inputEvent(e) {
    fetchCountries(e.target.value)
    .then((countries) => renderList(countries))
    
}

function renderList(countries) { 
    
        countries.map((country) => { 
        countryList.innerHTML +=  
        `<li>
            <img src="${country.flags.svg}">
            <p>${country.name.official}</p>
        </li>`
    })
    }    
