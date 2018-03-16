//            weatherAPI
            

app.factory('forecast', ['$http', function($http) { 
  return $http.get('http://openweathermap.org/current#name') 
         openweathermapFactory.getWeatherFromCitySearchByName({
                q: "London,uk", //city name and country code divided by comma, use ISO 3166 country codes eg "London,uk"
                lang: "<LANGUAGE>", // (optional) http://openweathermap.org/current#multi
                units: "<UNITS>", // (optinal) http://openweathermap.org/current#data
                type: "<TYPE>", // (optional) 'like' = close result, 'accurate' = accurate result
                appid: "<APP_ID>"
            }).then(function (_data) {
                //on success
            }).catch(function (_data) {
                //on error
            });   
}]);
