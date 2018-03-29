const app = angular.module('app', ['ngDialog']);

//Котроллер
app.controller("myCtrl", function ($scope, $http, ngDialog) {

    $scope.city = [];

    $http.get('http://localhost:8000/names')
        .then(function successCallback(response) {
            $scope.city = response.data;
        }, function errorCallback(response) {
            console.log("Error!!!" + response.err);
        });


        $scope.cityNameHtml = "Lviv";
    
        $scope.cityObj2 = ["Lviv", "Lviv", "Baku", "Minsk"];
        
        $scope.cityNameHtml = $scope.cityObj2;

    var apiKey = "16a25fce51ef72cc8689b48403d1563a";
    var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + $scope.cityNameHtml + "&appid=" + apiKey;

    $http.get(openWeatherURL).then(function successCallback(response) {
        $scope.description = response.data.weather[0].description;
        $scope.temperature = response.data.main.temp;
        $scope.cTemperature = ($scope.temperature - 273).toFixed(1) + " (C)";
        $scope.name = response.data.name;
    })
})


//Директиви

app.directive("headerBlock", function () {
    return {
        replace: true,
        templateUrl: "template/header.html",
        controller: function ($scope, $http, ngDialog) {}
    }
});

app.directive("bodyBlock", function () {
    return {
        replace: true,
        templateUrl: "template/body.html",
        controller: function ($scope, $http, ngDialog) {}
    }
});

app.directive("footerBlock", function () {
    return {
        replace: true,
        templateUrl: "template/footer.html",
        controller: function ($scope, $http, ngDialog) {}
    }
});

app.directive("contentBlock", function () {
    return {
        replace: true,
        templateUrl: "template/pages/Content.html",
        controller: function ($scope, $http, ngDialog) {
            $scope.sortType = "temperature";
            $scope.sortReverse = false;
            $scope.sortTypeFunc = function () {
                $scope.sortType = "temperature";
                $scope.sortReverse = !$scope.sortReverse
            }

            $scope.favWantDeleteM = function () {
                ngDialog.open({
                    template: '/template/modal/addDelete.html',
                    className: 'ngdialog-theme-default'
                });
            };

            $scope.addCityM = function () {
                ngDialog.open({
                    template: '/template/modal/addCity.html',
                    className: 'ngdialog-theme-default',
                    scope: $scope,
                    controller: function ($scope) {

                        $scope.city = [];

                        $scope.addNewCity = function () {
                            let cityObj = {
                                cityNames: $scope.cityNameHtml
                            };


                            $http.post('http://localhost:8000/cityName-add', cityObj)
                                .then(function successCallback(response) {
                                    $http.get('http://localhost:8000/names')
                                        .then(function successCallback(response) {
                                            $scope.city = response.data;
                                        }, function errorCallback(response) {
                                            console.log("Error!!!" + response.err);
                                        });


                                }, function errorCallback(response) {
                                    console.log("Error!!!" + response.err);
                                });
                        };
                    }
                });
            };

            $scope.tableWeatherContainer = [{
                name: "Tirana",
                temperature: -23,
                condition: "Smooth"
                        }, {
                name: "Andorra la Vella",
                temperature: -13,
                condition: "Smooth"
                        }, {
                name: "Yerevan",
                temperature: -25,
                condition: "Smooth"
                        }, {
                name: "Vienna",
                temperature: -3,
                condition: "Smooth"
                        }, {
                name: "Baku",
                temperature: -18,
                condition: "Smooth"
                        }, {
                name: "Minsk",
                temperature: -14,
                condition: "Smooth"
                        }];
        }
    }
});
