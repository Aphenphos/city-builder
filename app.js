function defaultCity() {
    const defaultCity = {
        name: 'Sahara',
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
    console.log(cityDefaultImage.src);
}

let city = defaultCity();
const cities = [];
const slogans = [];
var slogan = '';


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
    cities.push(city);
    displayCities();
    console.log(city);
});

const submitNewSlogan = document.getElementById('submit-new-slogan');
submitNewSlogan.addEventListener('click', () => {
    city.slogans.push(slogan);
    console.log(slogan);
    console.log(slogans);
    displayCities();
});


const list = document.getElementById('ul');
console.log(list);

let cityName = document.createElement('h1');
let citySlogan = document.createElement('h2');
let cityEnvironment = document.createElement('h3');
let cityArchitecture = document.createElement('h3');

function displayCities() {
    for (const city of cities) {

        const li = document.createElement('li');
        const cityName = document.createElement('h1');
        cityName.textContent = city.name;
        const citySlogan = document.createElement('h2');
        citySlogan.textContent = city.slogan;
        const cityEnvironment = document.createElement('h3');
        cityEnvironment.textContent = city.environment;
        const cityArchitecture = document.createElement('h3');
        cityArchitecture.textContent = city.architecture;

        li.append(cityName, citySlogan, cityEnvironment, cityArchitecture);
        list.append(li);
        displayInputs();
        console.log(list);
    }

}

displayDefaultCity();
displayCities();
displayInputs();