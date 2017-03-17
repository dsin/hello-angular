var artistControllers = angular.module('artistControllers', []);

var data = [
  		{"name": "test name",
  		"shortname": "test-name",
  		"reknown": "test",
  		"bio": "test"},
  		{"name": "aest name 2",
  		"shortname": "test-name-2",
  		"reknown": "aaa",
  		"bio": "test"}
	];

// "L"istController : L is capitalization
artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
  $http.get("js/data.json").then(function(response){
    var data = response.data;
    
	$scope.artists = data;
    $scope.artistOrder = "name"; // select name in the page by default
  }, function(data){
    // error
  });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get("js/data.json").then(function(response){
    var data = response.data;
    var data = data;
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId; // params from route

    if($routeParams.itemId > 0){
    	$scope.prevItem = Number($routeParams.itemId)-1;
    } else {
     	$scope.prevItem = $scope.artists.length-1;
    }
    if($routeParams.itemId < $scope.artists.length-1){
    	$scope.nextItem = Number($routeParams.itemId)+1;
    } else {
     	$scope.nextItem = 0;
    }    
  }, function(data){
    // error
  });
}]);