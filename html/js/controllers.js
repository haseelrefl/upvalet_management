angular.module('myApp.controllers', []);
//Top Select Date
var DatepickerDemoCtrl = (function ($scope) {
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

//title name
var Pagetitle = function MainCtrl($scope) {
    $scope.set = function () {
        $scope.title = $scope.user.title;
    };
}





