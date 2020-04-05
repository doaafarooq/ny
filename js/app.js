var app=angular.module('app',["ngRoute"]);
app.config(['$routeProvider',function($routeProvider){

    $routeProvider
    .when("/routing",
     
    {
        templateUrl:"routing.html"
})


.when("/dam",
{
    templateUrl:"dam.html"
    
})




}]);

