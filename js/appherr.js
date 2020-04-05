/*var herrApp=angular.module('herrApp',["ngRoute"]);
herrApp.config(['$routeProvider',function($routeProvider){

    $routeProvider
    .when("/routing",
     
    {
        templateUrl:"routing.html"
})



.when("/barn",
{
    templateUrl:"Herr.html"
    
})



}]);*/

var herrApp=angular.module('herrApp',["ngRoute"]);
herrApp.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "Herr.html",
        controller: "myController" 
    })
})