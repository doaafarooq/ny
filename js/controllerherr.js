var herrApp = angular.module('herrApp', [])
herrApp.controller('myController', function ($scope) {
    $scope.adress = {
        'name': '4Seasons',
    }
});



herrApp.controller('imageController', function ($scope) {
    $scope.imges = [
        { image: "herr1.jpg" },
        { image: "herr2.jpg" },
        { image: "herr3.jpg" },
        { image: "herr11.jpg" },
        { image: "herr10.jpg" },
        { image: "herr8.jpg" }
    
    ]
});




herrApp.directive("appfooter", function() {
    return {
        template: '<footer class="foot">Sociala Media</footer>'
        
        
    }
});
herrApp.directive("appfooter2", function() {
    return {
        template: '<footer class="foot2">Kontakta oss</footer>'
        
        
    }
});
herrApp.directive("appfooter3", function() {
    return {
        template: '<footer class="foot3">0722350021</footer>'
        
        
    }
});
herrApp.directive("appfooter4", function() {
    return {
        template: '<footer class="foot4">Rävstigen 18</footer>'
        
        
    }
});
herrApp.directive("appfooter5", function() {
    return {
        template: '<footer class="foot5">Info@4Seasons.se</footer>'
        
        
    }
});
herrApp.directive("appfooter6", function() {
    return {
        template: '<footer class="foot6">Fri Frakt-</footer>'
        
        
    }
});