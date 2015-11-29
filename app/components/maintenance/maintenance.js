'use strict';

angular.module('jeanpsv.github.io')
.controller('MaintenanceController', ['$scope', function($scope) {
	$scope.contacts = [{
		name: 'github',
		url: 'https://github.com/jeanpsv',
		icon: 'assets/img/social/github-circle.svg'
	}, {
		name: 'linkedin',
		url: 'https://br.linkedin.com/in/jean-vasconcelos-823247103',
		icon: 'assets/img/social/linkedin.svg'
	}]
}]);