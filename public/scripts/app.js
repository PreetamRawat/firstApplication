angular.module("demo", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "static/views/main.html",
                controller: "homeCtrl"
            })
        // .when("/red", {
        //     templateUrl : "red.htm"
        // })
        // .when("/green", {
        //     templateUrl : "green.htm"
        // })
        // .when("/blue", {
        //     templateUrl : "blue.htm"
        // });
    })
    .controller("homeCtrl", ['$scope', function homeCtrl(scope) {
        console.log(scope);
        scope.firstName = "preetam";
        scope.lastName = "rawat";
    }])