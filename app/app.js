'use strict';

angular.module('jeanpsv.github.io', ['ngRoute'])
.run(['$rootScope', function($rootScope) {
	$rootScope.title = 'Jean\'s profile';
}]);
