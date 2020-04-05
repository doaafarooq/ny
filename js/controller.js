var myApp = angular.module('myApp', [])
myApp.controller('myController', function ($scope) {
    $scope.adress = {
        'name': '4Seasons',
    }
});



myApp.controller('imageController', function ($scope) {
    $scope.imges = [
        { image: "man.jpg" },
        { image: "gul.jpg" },
        { image: "fint.jpg.jpg" },
        { image: "Barn.jpg.jpg" }
    ]
});

myApp.directive("appfooter", function() {
    return {
        template: '<footer class="foot">Sociala Media</footer>'
        
        
    }
});
myApp.directive("appfooter2", function() {
    return {
        template: '<footer class="foot2">Kontakta oss</footer>'
        
        
    }
});
myApp.directive("appfooter3", function() {
    return {
        template: '<footer class="foot3">0722350021</footer>'
        
        
    }
});
myApp.directive("appfooter4", function() {
    return {
        template: '<footer class="foot4">Rävstigen 18</footer>'
        
        
    }
});
myApp.directive("appfooter5", function() {
    return {
        template: '<footer class="foot5">Info@4Seasons.se</footer>'
        
        
    }
});
myApp.directive("appfooter6", function() {
    return {
        template: '<footer class="foot6">Fri Frakt-</footer>'
        
        
    }
});