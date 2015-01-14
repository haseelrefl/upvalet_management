var myApp=angular.module('myApp', ['ngRoute','ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    'use strict';
    $routeProvider
      .when('/index', {
        templateUrl: 'views/index.html'
      }).otherwise({ redirectTo: '/index' });
  }]);



myApp.controller('DatepickerDemoCtrl', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };
	$scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
	$scope.opened = true;
  };

  $scope.dateOptions = {
   formatYear: 'yy',
    startingDay: 1
	
   };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate','MMMM yyyy'];
  $scope.format = $scope.formats[4];
});







//Top Select Date
myApp.controller('Selectdate', function($scope) {
  $scope.dateOptions = {
    'year-format': "'yy'",
    'starting-day': 1,
    'datepicker-mode':"'month'",
    'min-mode':"month"   };
 
});

