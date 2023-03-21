const apiKey = 'c7e2447e79ae138450d0581a5033c877';

async function getWeatherData() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${apiKey}&units=metric`)
    const data = await response.json()
    return data;
}
const data = await getWeatherData()
console.log(data)

const weatherdayElements = document.querySelectorAll('.celsie');
const weatherRealElements = document.querySelectorAll('.realcelsie');
const weatherwindElements = document.querySelectorAll('.wind');
const weathericonElements = document.querySelectorAll('.iconWeather');
const animeiconElements = document.querySelectorAll('.anime');
const weatherData = await getWeatherData();
weatherdayElements.forEach(element => {
    element.textContent = `${Math.round(weatherData.main.temp)}°C`;
});
weatherwindElements.forEach(element => {
    element.textContent = `Cкорость ветра \n ${weatherData.wind.speed} м/с `;
});
weatherRealElements.forEach(element => {
    element.textContent = ` ${Math.round(weatherData.main.feels_like)}°C`;
});
weathericonElements.forEach(element => {
    element.style.backgroundImage = `url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`;
});
animeiconElements.forEach(element => {
    if (weatherData.main.temp > 30) {
        element.style.backgroundImage = `url(./img/30.png)`;
    } else if ((weatherData.main.temp > 20) && (data.weather[0].icon == '10d' || data.weather[0].icon == '10n' ) ) {
        element.style.backgroundImage = `url(./img/30.png)`;
    } else if (weatherData.main.temp > 20) {
        element.style.backgroundImage = `url(./img/20.png)`;
    } else if ((weatherData.main.temp > 10) && (data.weather[0].icon == '10d' || data.weather[0].icon == '10n' ) ) {
        element.style.backgroundImage = `url(./img/rainy10)`;
    } else if (weatherData.main.temp > 10) {
        element.style.backgroundImage = `url(./img/10.png)`;
    } else if ((weatherData.main.temp > 0) && (data.weather[0].icon == '10d' || data.weather[0].icon == '10n' ) ) {
        element.style.backgroundImage = `url(./img/rainy-7.png)`;
    } else if (weatherData.main.temp > 0) {
        element.style.backgroundImage = `url(./img/0.png)`;
    } else if ((weatherData.main.temp > -7) && (data.weather[0].icon == '10d' || data.weather[0].icon == '10n' ) ) {
        element.style.backgroundImage = `url(./img/rainy-7.png)`;
    } else if (weatherData.main.temp > -7) {
        element.style.backgroundImage = `url(./img/-7.png)`;
    } else if ((weatherData.main.temp > -15) && (data.weather[0].icon == '10d' || data.weather[0].icon == '10n' ) ) {
        element.style.backgroundImage = `url(./img/rainy-15.png)`;
    } else if (weatherData.main.temp > -15) {
        element.style.backgroundImage = `url(./img/-15.png)`;
    } else {
        element.style.backgroundImage = `url(./img/winter.png)`;
    }
});
//console.log(weatherData.main.temp);


