$(document).ready(function() {
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather',
      data: {
        q: 'LVIV',
        units: 'metric',
        APPID: '5d066958a60d315387d9492393935c19'
      },
      success: function(response) {
        var weatherData = {
          temperature: response.main.temp,
          pressure: response.main.pressure,
          description: response.weather[0].description,
          humidity: response.main.humidity,
          windSpeed: response.wind.speed,
          windDirection: response.wind.deg,
          icon: response.weather[0].icon
        };
        displayWeather(weatherData);
      },
      error: function(xhr, status, error) {
        console.log('Ошибка при получении погоды:', error);
      }
    });
  
    function displayWeather(weatherData) {
      $('.temperature').text(weatherData.temperature);
      $('.pressure').text(weatherData.pressure);
      $('.description').text(weatherData.description);
      $('.humidity').text(weatherData.humidity);
      $('.wind-speed').text(weatherData.windSpeed);
      $('.wind-direction').text(weatherData.windDirection);
  
      var iconUrl = 'http://openweathermap.org/img/w/' + weatherData.icon + '.png';
      $('.weather-icon').css('background-image', 'url(' + iconUrl + ')');
    }
  });
  