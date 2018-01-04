// Author: Carlos Valenzuela
// Company: TCS - IT Academy - Practice Exercise

'use strict';

angular.module("main", []);

angular.module('main').controller('mainController', function($scope, $http) {
	$scope.variable1 = "Probando";
	

	$scope.getHTML = function() {
		alert('Beginning of http get method');
		$http.get("https://www.w3schools.com/angular/welcome.htm").then(function(response) {
			alert(response.data);
			// $scope.categories = response.data;
			// alert('gets here');
			// $scope.categories = "test";
		});
	};	
	
	
	$scope.functionTest = function() {
		alert($scope.categories);
	};
	
});