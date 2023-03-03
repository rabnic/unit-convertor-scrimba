let input = 20;

const meterFeet = 3.281;
const literGallon = 0.264172;
const kgPound = 2.204;

let meters = (input * meterFeet).toFixed(3);
let feet = (input / meterFeet).toFixed(3);
//
let liters = (input * literGallon).toFixed(3);
let gallons = (input / literGallon).toFixed(3);
//
let kg = (input * kgPound).toFixed(3);
let pounds = (input / kgPound).toFixed(3);

const meterToFeetElem = document.getElementById("meter-feet");
const literToGallonElem = document.getElementById("liter-gallon");
const kgToPoundElem = document.getElementById("kg-pound");
const btnConvert = document.getElementById("btn-convert");

function convert() {
    const val = parseFloat(document.getElementById("input-value").value);
    meterToFeetElem.textContent = val + " meters = " + meters + " feet | " + val + " Feet = " + feet + " meters";
    literToGallonElem.textContent = val + " liters = " + liters + " gallons | "+ val + " gallons = " + gallons + " liter";
    kgToPoundElem.textContent = val + " kilograms = " + kg + " pounds | "+ val + " pounds = " + pounds + " kilograms";
    
}

btnConvert.addEventListener("click", () => {
    console.log("clicked");
    convert();
});

convert();
