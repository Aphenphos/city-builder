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



const display = document.getElementById('display');



const cityName = document.getElementById('user-city-name');
const citySlogan = document.getElementById('user-city-slogan');
const cityEnvironmentSelector = document.getElementById('city-environment');
var cityArchitectureSelector = document.getElementById('city-architecture');

function displayInputs() {
    cityName.value = city.name;
    citySlogan.value = city.slogan;
    cityEnvironmentSelector.value = city.environment;
    cityArchitectureSelector.value = city.architecture;
}

cityName.addEventListener('input', () => {
    city.name = cityName.value;
    console.log(city.name);
    displayCitiesAndSlogans();
    displayInputs();
});

citySlogan.addEventListener('input', () => {
    city.slogan = citySlogan.value;
    console.log(city.slogan);
    displayCitiesAndSlogans();
    displayInputs();
});

cityEnvironmentSelector.addEventListener('change', () => {
    city.environment = cityEnvironmentSelector.value;
    console.log(city.environment);
    displayCitiesAndSlogans();
    displayInputs();
});

cityArchitectureSelector.addEventListener('change', () => {
    city.architecture = cityArchitectureSelector.value;
    console.log(city.architecture);
    displayCitiesAndSlogans();
    displayInputs();
});

const submitNewCity = document.getElementById('submit-new-city');
submitNewCity.addEventListener('click', () => {
    citiesAndSlogans.push(city);
    console.log(city);
});


const list = display.querySelector('ul');

function displayCitiesAndSlogans() {
    list.innerHTML = '';
    for (const city of citiesAndSlogans) {

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
        list.push(li);
        displayCitiesAndSlogans();
        displayInputs();
        console.log(city);
    }

}


displayCitiesAndSlogans();
displayInputs();