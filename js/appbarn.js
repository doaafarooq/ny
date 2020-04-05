var demo=angular.module('demo',["ngRoute"]);
demo.config(['$routeProvider',function($routeProvider){

    $routeProvider
    .when("/routing",
     
    {
        templateUrl:"routing.html"
})



.when("/barn",
{
    templateUrl:"barn.html"
    
})



}]);