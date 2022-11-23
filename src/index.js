import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
import Notiflix from 'notiflix';
var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')

input.addEventListener('input', debounce(inputEvent, DEBOUNCE_DELAY));

function inputEvent(e) {
    fetchCountries(e.target.value.trim())
        .then((countries) => renderList(countries))        
}

function renderList(countries) { 
    if (!countries) { 
        countryList.innerHTML = ''
        countryInfo.innerHTML = ''
    } 
    
    else if (countries.length > 10) {
        Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.')
    }
    else if (countries.length > 1 & countries.length <= 10) {
        countries.map((country) => {
            countryList.innerHTML +=
                `<li>
            <img src="${country.flags.svg}">
            <p>${country.name.official}</p>
        </li>`
        })
    }
    else {
        countries.map((country) => 
        {
            countryList.innerHTML = '';
            countryInfo.innerHTML =
                `<div>
            <div class="title-cont">
            <img src="${country.flags.svg}">
            <h1 class="country-name">${country.name.official}</h1>
            </div>
            <h2 class="cont-data"><p class="main-text">Capital:</p>${country.capital}</h2>
            <h2 class="cont-data"><p class="main-text">Population:</p>${country.population}</h2>
            <h2 class="cont-data"><p class="main-text">Languages:</p>${Object.values(country.languages)}</h2>
        </div>`
        })
    } 
    }  