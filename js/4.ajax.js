var myApp = angular.module('myApp', []);

// $http service
//
// to prevent xss, open in safari 
// ref : http://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome
//
// 'MyController', function MyController($scope, $http) -> ['$scope', '$http', function($scope, $http)] is to prevent minification problem in the future
//
myApp.controller('MyController', ['$scope', '$http', function($scope, $http){
	$http.get("js/data.json").then(function(response){
    var data = response.data;
    $scope.artists = data;
    $scope.artistOrder = "name"; // select name in the page by default
  }, function(data){
    // error
  });
}]);