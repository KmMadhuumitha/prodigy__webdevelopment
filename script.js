function getWeather() {
    var locationInput = document.getElementById("location");
    var weatherInfo = document.getElementById("weather-info");
  
    weatherInfo.innerHTML = "";
  
  
    var location = locationInput.value;
    var apiKey = "YOUR_API_KEY"; // Replace with your own API key
    var url = "https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + location;
  
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var weather = data.current;
        var temperature = weather.temp_c;
        var condition = weather.condition.text;
        var windSpeed = weather.wind_kph;
  
     
        var weatherHtml = "<p>Temperature: " + temperature + "°C</p>";
        weatherHtml += "<p>Condition: " + condition + "</p>";
        weatherHtml += "<p>Wind Speed: " + windSpeed + " km/h</p>";
  
        weatherInfo.innerHTML = weatherHtml;
      })
      .catch(function(error) {
        console.log("Error fetching weather data:", error);
      });
  }