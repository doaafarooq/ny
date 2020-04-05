var demo = angular.module('demo', [])
demo.controller('myController', function ($scope) {
    $scope.adress = {
        'name': '4Seasons',
    }
});



demo.controller('imageController', function ($scope) {
    $scope.imges = [
        { image: "barn1.jpg" },
        { image: "barn9.jpg" },
        { image: "barn8.jpg" },
        { image: "barn7.jpg" },
        { image: "barn5.jpg" },
        { image: "barn10.jpg" }
    
    ]
});

/*app.controller('ListController', function ($scope) {
    $scope.lists = {
             'list1':  'Klänningar',
             'list2':  'Skor',
              'list3':' Jeans',
    
    }  
});*/


demo.directive("appfooter", function() {
    return {
        template: '<footer class="foot">Sociala Media</footer>'
        
        
    }
});
demo.directive("appfooter2", function() {
    return {
        template: '<footer class="foot2">Kontakta oss</footer>'
        
        
    }
});
demo.directive("appfooter3", function() {
    return {
        template: '<footer class="foot3">0722350021</footer>'
        
        
    }
});
demo.directive("appfooter4", function() {
    return {
        template: '<footer class="foot4">Rävstigen 18</footer>'
        
        
    }
});
demo.directive("appfooter5", function() {
    return {
        template: '<footer class="foot5">Info@4Seasons.se</footer>'
        
        
    }
});
demo.directive("appfooter6", function() {
    return {
        template: '<footer class="foot6">Fri Frakt-</footer>'
        
        
    }
});