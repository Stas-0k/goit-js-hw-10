import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list')
let arrCountry = [];
input.addEventListener('input', debounce(inputEvent, DEBOUNCE_DELAY));

function inputEvent(e) {
  localStorage.setItem('countryName', JSON.stringify(e.target.value));
  const countryFind = JSON.parse(localStorage.getItem('countryName'));
   API.fetchCountries(countryFind);
    
}
