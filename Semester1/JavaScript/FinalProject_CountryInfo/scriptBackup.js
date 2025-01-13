
/*
function getCountryInfo()
{
    let formRef = document.querySelector("#countryInfoForm");
    let selectedCountry = formRef["countrySelection"].value;
    let population = document.querySelector("#population");
    population.value = 3.14159;
    let pUnitSelected = formRef["populationDensity"].value;
    let areaUnitSelected = formRef["areaSelection"].value;

    let wikiLink = document.querySelector("#wikiPageLink");
    wikiLink.setAttribute("href", "https://en.wikipedia.org/" + selectedCountry);

}

function findIndex(array, target) {
  return array.indexOf(target);
}

*/
//bringing in the json data
import countryData from './countries.json' assert { type: 'json'};





//linking to countrySelection in html
var select = document.getElementById("countrySelection");

//pulling country names from the json and entering it into the drop down menu for the html
for(var i = 0; i < countryData.length; i++){
    var countryDrop =  countryData[i];
//linking to option in html
    var el = document.createElement("option");
    el.text = countryDrop.Name;
    el.value = countryDrop.Name;
//adding country to the select menu
    select.add(el);
}

//creating a population array
let popArray = [];
for(var i = 0; i < countryData.length; i++){
  popArray[i] =  countryData[i].Population;
}

let areaArray = [];
for(var i = 0; i < countryData.length; i++){
  areaArray[i] =  countryData[i].Area;
}

let countryArray = [];
for(var i = 0; i < countryData.length; i++){
  countryArray[i] =  countryData[i].Name;
}

//connecting to places in the HTML file
const flagSelect = document.getElementById('flag-container');
const countrySelect = document.getElementById('countrySelection');
const areaSelect = document.getElementById('unitSelection');
const popPercent = document.getElementById('populationPercent');



//Event listener for changing the dropdown selection
countrySelect.addEventListener('change', () => {
  const selectedCountry = countrySelect.value;
//Replacing spaces with underscores to match naming of image files
  const countryImage = selectedCountry.replace(/ /g,"_");
//Connecting to a site for flags with the dropdown selection
  const flagURL = `./flags/${countryImage}.png`;
  const flagImage = `<img src="${flagURL}"  height="100">`;
//replacing the section in HTML to display image file
  flagSelect.innerHTML = flagImage;
});

//insert population count and default area
countrySelect.addEventListener('change', () => {
  let index = countryArray.indexOf(countrySelect.value);
  document.getElementById("population").value = popArray[index];
  document.getElementById("areaSelection").value = areaArray[index];
  document.getElementById("populationPercent").value = '' + popArray[index] / 78880000 + '%';
})

//add ability to change between km and mi from the dropdown
areaSelect.addEventListener('change', () => {
  
  let unit = areaSelect.value;
  if (unit === "kilometres"){
    document.getElementById("areaSelection").value = (areaArray[index]) * 1.6;
  
  }
 else if (unit === "miles"){
  document.getElementById("areaSelection").value = areaArray[index];
  }

})

//detecting selection from radio buttons
  const squareMi = document.querySelector('input[value="squareMi"]');
  const squareKm = document.querySelector('input[value="squareKm"]');
//event listener to detect clicking the radio buttons  
  squareMi.addEventListener('click', () => {
    let index = countryArray.indexOf(countrySelect.value);
    document.getElementById("densityOutput").value = popArray[index] / areaArray[index];
    });
  
  squareKm.addEventListener('click', () => {
    let index = countryArray.indexOf(countrySelect.value);
    document.getElementById("densityOutput").value = popArray[index] / (areaArray[index] * 1.6);
  });

  countrySelect.addEventListener('change', () => {
    document.getElementById("densityOutput").value = "";
  });