console.log("Script loaded successfully!");
let apiKey = "a9236c3f226b4cbb8e482116252203"
let url = "https://api.weatherapi.com/v1/current.json?key="+ apiKey +"&aqi=no&q=";

 async function checkWeather(city){
    console.log("checking weather for",city);
    const response = await fetch(url+city);
    console.log(response.status);
    if(response.status==404){
     document.querySelector(".weather").style.display = "none";
     console.log("error occured:(");
    }
    else{
        let data = await response.json();
        console.log("Weather data received:", data);
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c)+ "&degC";
        document.querySelector(".humidity-text").innerHTML = data.current.humidity + "%";
        document.querySelector(".wind-text").innerHTML = data.current.wind_kph + "km/h";
        document.querySelector(".weather").style.display = "block";

        let weatherIcon = document.querySelector(".rain-img");
        if(data.current.condition.text == "Moderate or heavy rain with thunder"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/80x80/day/389.png";
        }
        else if(data.current.condition.text == "sunny"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/113.png";
        }
        else if(data.current.condition.text == "partly cloudy"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/80x80/day/116.png";
        }
        else if(data.current.condition.text == "Cloudy"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/119.png";
        }
        else if(data.current.condition.text == "Overcast"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/122.png";
        }
        else if(data.current.condition.text == "Mist"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/143.png";
        }
        else if(data.current.condition.text == "Patchy rain possible"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/176.png";
        }
        else if(data.current.condition.text == "Patchy snow possible"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/179.png";
        }
        else if(data.current.condition.text == "Patchy sleet possible"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/182.png";
        }
        else if(data.current.condition.text == "Patchy freezing drizzle possible"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/185.png";
        }
        else if(data.current.condition.text == "Thundery outbreaks possible"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/200.png";
        }
        else if(data.current.condition.text == "Blowing snow"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/227.png";
        }
        else if(data.current.condition.text == "Blizzard"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/230.png";
        }
        else if(data.current.condition.text == "Fog"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/248.png";
        }
        else if(data.current.condition.text == "Freezing fog"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/260.png";
        }
        else if(data.current.condition.text == "Patchy light drizzle"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/263.png";
        }
        else if(data.current.condition.text == "Light drizzle"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/266.png";
        }
        else if(data.current.condition.text == "Freezing drizzle"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/281.png";
        }
        else if(data.current.condition.text == "Heavy freezing drizzle"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/284.png";
        }
        else if(data.current.condition.text == "Patchy light rain"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/293.png";
        }
        else if(data.current.condition.text == "Light rain"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/296.png";
        }
        else if(data.current.condition.text == "Moderate rain at times"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/299.png";
        }
        else if(data.current.condition.text == "Moderate rain"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/302.png";
        }
        else if(data.current.condition.text == "Heavy rain at times"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/305.png";
        }
        else if(data.current.condition.text == "Heavy rain"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/308.png";
        }
        else if(data.current.condition.text == "Light freezing rain"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/311.png";
        }
        else if(data.current.condition.text == "Moderate or heavy freezing rain"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/314.png";
        }
        else if(data.current.condition.text == "Light sleet"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/317.png";
        }
        else if(data.current.condition.text == "Moderate or heavy sleet"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/320.png";
        }
        else if(data.current.condition.text == "Patchy light snow"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/323.png";
        }
        else if(data.current.condition.text == "Light snow"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/326.png";
        }
        else if(data.current.condition.text == "Patchy moderate snow"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/329.png";
        }
        else if(data.current.condition.text == "Moderate snow"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/332.png";
        }
        else if(data.current.condition.text == "Patchy heavy snow"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/335.png";
        }
        else if(data.current.condition.text == "Heavy snow"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/338.png";
        }
        else if(data.current.condition.text == "Ice pellets"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/350.png";
        }
        else if(data.current.condition.text == "Light rain shower"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/353.png";
        }
        else if(data.current.condition.text == "Moderate or heavy rain shower"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/356.png";
        }
        else if(data.current.condition.text == "Torrential rain shower"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/359.png";
        }
        else if(data.current.condition.text == "Light sleet showers"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/362.png";
        }
        else if(data.current.condition.text == "Moderate or heavy sleet showers"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/365.png";
        }
        else if(data.current.condition.text == "Light snow showers"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/368.png";
        }
        else if(data.current.condition.text == "Moderate or heavy snow showers"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/371.png";
        }
        else if(data.current.condition.text == "Light showers of ice pellets"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/374.png";
        }
        else if(data.current.condition.text == "Moderate or heavy showers of ice pellets"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/377.png";
        }
        else if(data.current.condition.text == "Patchy light rain with thunder"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/386.png";
        }
        else if(data.current.condition.text == "Patchy light snow with thunder"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/392.png";
        }
        else if(data.current.condition.text == "Moderate or heavy snow with thunder"){
            weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/395.png";
        }
    }
}
let searchbtn = document.querySelector(".search-icon");
searchbtn.addEventListener("click",()=>{
    let searchValue = document.querySelector(".search").value;
    checkWeather(searchValue);
})
searchValue = " ";
