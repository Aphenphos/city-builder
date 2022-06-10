function defaultCity() {
    const defaultCity = {
        name: '',
        slogans: [],
        environment: 'Tropical',
        architecture: 'Romanesque'
    };
    return defaultCity;
}

const cityDefault = document.getElementById('city-selector');
const cityDefaultImage = document.getElementById('city-image-display');
const cityArchitectureDisplay = document.getElementById('city-architecture-display');

cityDefault.addEventListener('change', () => {
    displayDefaultCity();
});

function displayDefaultCity() {
    cityDefaultImage.src = '/assets/' + cityDefault.value + '.jpg';
    cityArchitectureDisplay.src = '/assets/' + city.architecture + '.jpg';
    console.log(cityDefaultImage.src);
}

let city = defaultCity();
let slogan = '';
const cities = [];
var slogans = [];


var cityDisplay = document.getElementById('city-image-display');



const cityName = document.getElementById('user-city-name');
const citySlogan = document.getElementById('user-city-slogan');
const cityEnvironmentSelector = document.getElementById('city-environment');
var cityArchitectureSelector = document.getElementById('city-architecture');

function displayInputs() {
    cityName.value = city.name;
    citySlogan.value = slogan;
    cityEnvironmentSelector.value = city.environment;
    cityArchitectureSelector.value = city.architecture;
}

cityName.addEventListener('input', () => {
    city.name = cityName.value;
    console.log(city.name);
    displayInputs();
});


citySlogan.addEventListener('input', () => {
    slogan = citySlogan.value;
    displayInputs();
    console.log(slogan);
});

cityEnvironmentSelector.addEventListener('change', () => {
    city.environment = cityEnvironmentSelector.value;
    cityDisplay.removeAttribute('class');
    cityDisplay.classList.add(`${city.environment}-class`);
    console.log(city.environment);
    displayInputs();
});

cityArchitectureSelector.addEventListener('change', () => {
    city.architecture = cityArchitectureSelector.value;
    cityArchitectureDisplay.src = '/assets/' + city.architecture + '.jpg';
    console.log(city.architecture);
    console.log(cityArchitectureDisplay);
    displayInputs();
});

const submitNewCity = document.getElementById('submit-new-city');
submitNewCity.addEventListener('click', () => {
    if (city.name !== '') {
        cities.push(city);
        displayCities();
        console.log(city);
        city = defaultCity();
        slogans = [];
    } else {window.alert('Must enter a city name!');} 
});

const submitNewSlogan = document.getElementById('submit-new-slogan');
submitNewSlogan.addEventListener('click', () => {
    slogans.push(slogan);
});


const list = document.getElementById('ul');
console.log(list);


let li = document.createElement('li');
let displayCityName = document.createElement('td');
let displayCitySlogan = document.createElement('td');
let cityEnvironment = document.createElement('td');
let cityArchitecture = document.createElement('td');

function displayCities() {
    for (const city of cities) {
        
        li = document.createElement('li');
        displayCityName = document.createElement('td');
        displayCityName.textContent = city.name;
        displayCitySlogan = document.createElement('td');
        displayCitySlogan.textContent = slogans;
        cityEnvironment = document.createElement('td');
        cityEnvironment.textContent = city.environment;
        cityArchitecture = document.createElement('td');
        cityArchitecture.textContent = city.architecture;
        li.classList.add(`${city.architecture}-class`);

    }
    li.append(displayCityName, displayCitySlogan, cityEnvironment, cityArchitecture);
    list.append(li);
    displayInputs();
    console.log(list);
    city = defaultCity();
}

displayDefaultCity();
displayCities();
displayInputs();