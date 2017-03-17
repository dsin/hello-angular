var myApp = angular.module('myApp', []);

// $scope : pass thing from template, controller
myApp.controller('MyController', function MyController($scope){
	$scope.artists = [
  		{"name": "test name",
  		"shortname": "test-name",
  		"reknown": "test",
  		"bio": "test"},
  		{"name": "test name 2",
  		"shortname": "test-name-2",
  		"reknown": "test",
  		"bio": "test"}
	];
});