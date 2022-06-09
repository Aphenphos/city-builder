const cities = [];
const slogans = [];
const submitNewCity = document.getElementById('submit-new-city');

var userCityName = document.querySelector('user-city-name');
var userCitySlogan = document.querySelector('user-city-slogan');


submitNewCity.addEventListener('click', () => {
    cities.push(userCityName);
    slogans.push(userCitySlogan);
    console.log(cities);
    console.log(slogans);
});

