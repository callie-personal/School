//bringing in the json data
import countryData from './countries.json' assert { type: 'json'};

//function to populate dropdown menu
function populateCountryDropdown() {
  const countrySelect = document.getElementById('countrySelection');
//pulling country names from the json data and entering it into the drop down menu of HTML
// takes the countryData variable and plugs it into the country constant in order to append the options into the dropdown
  for (const country of countryData) {
    const option = document.createElement('option');
//inserts values into the value/text spots in HTML
    option.value = country.Name;
    option.text = country.Name;
    //adds the country names to the dropdown, append to the ('option') element
    countrySelect.appendChild(option);
  }
}
//event listener to run the dropdown function on page load
document.addEventListener("DOMContentLoaded", populateCountryDropdown());

//creating a population array
let popArray = [];
for(var i = 0; i < countryData.length; i++){
  popArray[i] =  countryData[i].Population;
}
//creating an area array
let areaArray = [];
for(var i = 0; i < countryData.length; i++){
  areaArray[i] =  countryData[i].Area;
}
//creating a country Array
let countryArray = [];
for(var i = 0; i < countryData.length; i++){
  countryArray[i] =  countryData[i].Name;
}

//connecting to places in the HTML file
const countrySelect = document.getElementById('countrySelection');
const areaSelect = document.getElementById('unitSelection');

//function to add the flag images
function updateFlagImage() {
  const selectedCountry = document.getElementById('countrySelection').value;
//Replacing spaces with underscores to match naming of image files
  const countryImage = selectedCountry.replace(/ /g, '_');
//Connecting to a site for flags with the dropdown selection
  const flagURL = `./flags/${countryImage}.png`;
  const flagImage = `<img src="${flagURL}"  height="100">`;
//replacing the section in HTML to display image file
  document.getElementById('flag-container').innerHTML = flagImage;
}
//function to populate the area/population fields from the json data, based on dropdown selection
function updatePopulationAndArea() {
  const selectedCountry = document.getElementById('countrySelection').value;
  const index = countryArray.indexOf(selectedCountry);
  const population = popArray[index];
  const area = areaArray[index];
//grabbing related fields from html
  const populationField = document.getElementById('population');
  const areaField = document.getElementById('areaSelection');
//plugging into population/area fields in html  
  populationField.value = population;
  areaField.value = area;
}

//when the countrydropdown is changed, runs the flag image function
countrySelect.addEventListener('change', () => {
  updateFlagImage();
  updatePopulationAndArea();
})

//could not combine this with the updatePopulationArea function or the previous event listener, so it's on it's own here
//prints out a number to a fixed number of places
countrySelect.addEventListener('change', () => {
  let index = countryArray.indexOf(countrySelect.value);
  document.getElementById("populationPercent").value = '' + (Number(popArray[index]) / 78880000).toFixed(3)+ '%';
})

//add ability to change between km and mi from the dropdown
function updateAreaUnit() {
//gets selected unit value
  const selectedUnit = document.getElementById('unitSelection').value;
  const areaField = document.getElementById('areaSelection');
  const selectedCountry = document.getElementById('countrySelection').value;
  const index = countryArray.indexOf(selectedCountry);
  
//if the unit is kilometres, then multiply the area by 1.6 to convert from miles
  if (selectedUnit === 'kilometres') {
    areaField.value = Number(areaArray[index] * 1.6).toFixed(0);
  } else {
//else print the miles amount
    areaField.value = areaArray[index];
  }
}

//event listener to respond to changing the mi/km dropdown/convert values
areaSelect.addEventListener('change', () => {
  updateAreaUnit();
})

//detecting selection from radio buttons
  const squareMi = document.querySelector('input[value="squareMi"]');
  const squareKm = document.querySelector('input[value="squareKm"]');
//event listeners to detect clicking the radio buttons  
  squareMi.addEventListener('click', () => {
    let index = countryArray.indexOf(countrySelect.value);
    document.getElementById("densityOutput").value = Number(popArray[index] / areaArray[index]).toFixed(0);
    });
  
  squareKm.addEventListener('click', () => {
    let index = countryArray.indexOf(countrySelect.value);
    document.getElementById("densityOutput").value = Number(popArray[index] / (areaArray[index] * 1.6)).toFixed(0);
  });
function getWikiPage(){
  const selectedCountry = document.getElementById('countrySelection').value;
  const preppedLink = selectedCountry.replace(/ /g, '_');
  document.getElementById("wikiPage").href = `https://www.wikipedia.org/wiki/${preppedLink}`;
}
countrySelect.addEventListener('change', () => {
  getWikiPage();
})

//clears the density field when a new country is selected
  countrySelect.addEventListener('change', () => {
    document.getElementById("densityOutput").value = ""; 
  });


