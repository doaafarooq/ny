var app = angular.module('app', [])
app.controller('myController', function ($scope) {
    $scope.adress = {
        'name': '4Seasons',
    }
});



app.controller('imageController', function ($scope) {
    $scope.imges = [
        { image: "image1.jpg" },
        { image: "image2.jpg" },
        { image: "image4.jpg" },
        { image: "image5.jpg" },
        { image: "image6.jpg" },
        { image: "image7.jpg" }
    
    ]
});




app.directive("appfooter", function() {
    return {
        template: '<footer class="foot">Sociala Media</footer>'
        
        
    }
});
app.directive("appfooter2", function() {
    return {
        template: '<footer class="foot2">Kontakta oss</footer>'
        
        
    }
});
app.directive("appfooter3", function() {
    return {
        template: '<footer class="foot3">0722350021</footer>'
        
        
    }
});
app.directive("appfooter4", function() {
    return {
        template: '<footer class="foot4">Rävstigen 18</footer>'
        
        
    }
});
app.directive("appfooter5", function() {
    return {
        template: '<footer class="foot5">Info@4Seasons.se</footer>'
        
        
    }
});
app.directive("appfooter6", function() {
    return {
        template: '<footer class="foot6">Fri Frakt-</footer>'
        
        
    }
});