const API_KEY = "8b0c0adedf66f705d3038e86b1712086";

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    getWeatherData(weatherAPIUrl);
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

function getWeatherData(weatherAPIUrl) {
    fetch(weatherAPIUrl)
    .then(response => response.json())
    .then(data => {
        const locationName = data.name;
        const locationWeather = data.weather[0].main;
        const locationTemp = data.main.temp;
        paintWeather(locationName, locationWeather, locationTemp);
    });
}

function paintWeather(locationName, locationWeather, locationTemp) {
    const locationNameContainer = document.querySelector("#weather span:first-child");
    const lcationWeatherContainer = document.querySelector("#weather span:last-child");

    locationNameContainer.innerText = locationName;
    lcationWeatherContainer.innerText = `${locationWeather} / ${locationTemp}°C`;
}