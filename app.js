const apiKey ="f3d91c69e86f768882e1acb9546536cf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".search input");
const searchButton =document.getElementById("icon");

searchButton.onclick = function(){
    checkWeather(searchBox.value);
}

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display ="none";
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "images/thunderstorm.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Dust"){
        weatherIcon.src = "images/dust.png";
    }  
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "images/haze.png";
    }  
    else if(data.weather[0].main == "Smoke"){
        weatherIcon.src = "images/smoke.png";
    }
    else if(data.weather[0].main == "Fog"){
        weatherIcon.src = "images/fog.png";
    }
    else if(data.weather[0].main == "Tornado"){
        weatherIcon.src = "images/tornado.png";
    }

    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display = "none";

}

checkWeather(city);