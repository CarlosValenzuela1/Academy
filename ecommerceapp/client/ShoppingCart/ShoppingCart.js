// Author: Carlos Valenzuela
// Company: TCS - IT Academy - Practice Exercise

'use strict';

angular.module("main", []);

angular.module('main').controller('mainController', function($scope, $http) {

	$scope.categories = [
		{
			id: 1,
			name: "Movies from 2018",
			catDescription: "Movies that were release on 2018",
			catArray: 
			[
				{
					id: 1,
					name: "Black Panther",
				},
				{
					id: 2,
					name: "Ready Player One",
				},
				{
					id: 3,
					name: "Alita",
				}
			]
		}, 
		{
			id: 2,
			name: "Movies from 2017",
			catDescription: "Movies that were release on 2017",
			catArray: 
			[
				{
					id: 1,
					name: "Get Out",
				},
				{
					id: 2,
					name: "Dunkirk",
				},
				{
					id: 3,
					name: "Logan",
				},
			]
		},
		{
			id: 3,
			name: "Movies from 2016",
			catDescription: "Movies that were release on 2016",
			catArray: 
			[
				{
					id: 1,
					name: "Arrival",
				},
				{
					id: 2,
					name: "Zootopia",
				},
				{
					id: 3,
					name: "Moonlight",
				},
			]
		}
	];

	$scope.functionTest = function() {
		console.log($scope.categories);

	};

	$scope.catSelected = 0;

	$scope.viewProd = function() {
		console.log("Testing");
		console.log($scope.categories[0].name);

	};

	$scope.selected = 0;

	$scope.selectedIndex = function(param) {
		console.log("Category has been selected");
		console.log("the value is: " + param);
		$scope.selected = param;
	};

});
