'use strict';

angular.module('jeanpsv.github.io', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/maintenance', {
		templateUrl: 'components/maintenance/maintenance.html',
		controller: 'MaintenanceController',
	})
	.otherwise({
		redirectTo: '/maintenance'
	});
}])
.run(['$rootScope', function($rootScope) {
	$rootScope.title = 'Jean\'s profile';
}]);
