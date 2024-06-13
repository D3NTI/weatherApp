const apiKey = "17879c6bb5ee48461d5f9554f376ea3e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
let find = document.querySelector(".find");
let btn = document.querySelector(".search button");
let icon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);
    var data = await response.json();
    if (data.cod == "404") {
        document.querySelector(".city").innerHTML = data.message;
        document.querySelector(".temp").innerHTML = "?? °C";
        document.querySelector("#humidity").innerHTML = "?? %";
        document.querySelector(".wind-speed").innerHTML = "?? km/h";
    } else {
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°C";
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";
        if (data.weather[0].main == "Clear") {
            icon.src = "/images/clear.png";
        } else if (data.weather[0].main == "Clouds") {
            icon.src = "/images/clouds.png";
        } else if (data.weather[0].main == "Drizzle") {
            icon.src = "/images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            icon.src = "/images/mist.png";
        } else if (data.weather[0].main == "Rain") {
            icon.src = "/images/rain.png";
        } else if (data.weather[0].main == "Snow") {
            icon.src = "/images/snow.png";
        } else if (data.weather[0].main == "Wind") {
            icon.src = "/images/wind.png";
        }
    }
}

btn.addEventListener("click", () => {
    checkWeather(find.value);
});