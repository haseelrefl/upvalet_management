var myApp=angular.module('myApp', ['ngRoute','ui.bootstrap']);

myApp.config(['$routeProvider', function($routeProvider) {
    'use strict';
    $routeProvider
      .when('/index', {
        templateUrl: 'views/index.html',
		controller: ['$scope','$rootScope', function ($scope,$rootScope) {
      	$rootScope.title = 'Home';}]
      })
	  .when('/trades', {
        templateUrl: 'views/trades.html',
		controller: ['$scope','$rootScope', function ($scope,$rootScope) {
      	$rootScope.title = 'Trades';}]
      })
	   .when('/inventory', {
        templateUrl: 'views/inventory.html',
		controller: ['$scope','$rootScope', function ($scope,$rootScope) {
      	$rootScope.title = 'Inventory';}]
      })
	  .when('/salesrep', {
        templateUrl: 'views/salesrep.html',
		controller: ['$scope','$rootScope', function ($scope,$rootScope) {
      	$rootScope.title = 'Sales Rep';}]
      })
	  .when('/customers', {
        templateUrl: 'views/customers.html',
		controller: ['$scope','$rootScope', function ($scope,$rootScope) {
      	$rootScope.title = 'Customers';}]
      }).otherwise({ redirectTo: '/index' });
}]);

myApp.config(function($httpProvider) {
  //Enable cross domain calls
  $httpProvider.defaults.useXDomain = true;

  //Remove the header used to identify ajax call  that would prevent CORS from working
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $httpProvider.defaults.headers.common.token = '930a68bafd1d41ccb5723b01a1e60d11';
});

myApp.controller('getGoalController', function($scope, $http, $timeout) {

  var getGoal = function(){
    $http
    .get("http://localhost:8080/v1/dealers/goal")
    .success(function(response) {
      console.log(response);
      $scope.goal = response.goal;
      timer = $timeout(getGoal, 2000);
    })
    .error(function(error) {
      console.log("error - " + JSON.stringify(error));
      timer = $timeout(getGoal, 2000);
    });
  }

  var timer = $timeout(getGoal, 2000);

  $scope.$on("$destroy",function( event ) {
    $timeout.cancel( timer );
  });

});

myApp.controller('getTotalSalesThisMonthController', function($scope, $http, $timeout){
  
  var getSalesPerMonth = function(){
    $http
    .get('http://localhost:8080/v1/dealers/sales_month?year=2015&month=0')
    .success(function(data) {
      console.log(data);
      $scope.sold = data.count;
      timer = $timeout(getSalesPerMonth, 2000);
    })
    .error(function(data) {
      console.log(data);
      timer = $timeout(getSalesPerMonth, 2000);
    });
  }

  var timer = $timeout(getSalesPerMonth, 2000);

  $scope.$on("$destroy",function( event ) {
    $timeout.cancel( timer );
  });
});