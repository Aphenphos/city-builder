function defaultCity() {
    const defaultCity = {
        name: 'Sahara',
        slogan: 'This place is dope.',
        environment: 'Tropical',
        architecture: 'Romanesque'
    };
    return defaultCity;
}

let city = defaultCity();
const citiesAndSlogans = [];



const inputs = document.getElementById('inputs');
const display = document.getElementById('display');



var cityName = inputs.querySelector('user-city-name');
var citySlogan = inputs.querySelector('user-city-slogan');
var cityEnvironmentSelector = inputs.querySelector('city-environment');
var cityArchitectureSelector = inputs.querySelector('city-architecture');

function displayInputs() {
    cityName.value = city.name;
    citySlogan.value = city.slogan;
    cityEnvironmentSelector.value = city.environment;
    cityArchitectureSelector.value = city.architecture;
}

cityName.addEventListener('input', () => {
    city.name = cityName.value;
    displayCitiesAndSlogans();
});

citySlogan.addEventListener('input', () => {
    city.name = citySlogan.value;
    displayCitiesAndSlogans();
});

cityEnvironmentSelector.addEventListener('change', () => {
    city.environment = cityEnvironmentSelector.value;
    displayCitiesAndSlogans();
});

cityArchitectureSelector.addEventListener('change', () => {
    city.architecture = cityArchitectureSelector.value;
    displayCitiesAndSlogans();
});



const list = display.querySelector('ul');

function displayCitiesAndSlogans() {
    list.innerHTML = '';
    for (const cityAndSlogan of citiesAndSlogans) {

        const li = document.createElement('li');
        const cityName = document.createElement('h1');
        cityName.textContent = cityName;
        const citySlogan = document.createElement('h2');
        citySlogan.textContent = citySlogan;
        const cityEnvironment = document.createElement('h3');
        cityEnvironment.textContent = cityEnvironmentSelector;
        const cityArchitecture = document.createElement('h3');
        cityArchitecture.textContent = cityArchitectureSelector;

        li.append(cityName, citySlogan, cityEnvironment, cityArchitecture);
        list.push(li);
        displayCitiesAndSlogans();
    }

}

displayCitiesAndSlogans();