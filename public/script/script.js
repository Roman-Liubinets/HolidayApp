const app = angular.module('app', ['ngDialog']);

//Котроллер
app.controller("myCtrl", function($scope, $http, ngDialog) {});

//Директиви

app.directive("headerBlock", function() {
    return {
        replace: true,
        templateUrl: "template/header.html",
        controller: function($scope, $http, ngDialog) {}
    }
});

app.directive("bodyBlock", function() {
    return {
        replace: true,
        templateUrl: "template/body.html",
        controller: function($scope, $http, ngDialog) {}
    }
});

app.directive("footerBlock", function() {
    return {
        replace: true,
        templateUrl: "template/footer.html",
        controller: function($scope, $http, ngDialog) {}
    }
});

app.directive("contentBlock", function() {
    return {
        replace: true,
        templateUrl: "template/pages/Content.html",
        controller: function($scope, $http, ngDialog) {}
    }
});