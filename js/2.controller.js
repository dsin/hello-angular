var myApp = angular.module('myApp', []);

// $scope : pass thing from template, controller
myApp.controller('MyController', function MyController($scope){
	$scope.author = {
		'name': 'dsin',
		'title': 'Mr',
		'company': 'dsin company'
	}
});