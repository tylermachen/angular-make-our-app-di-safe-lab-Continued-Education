function ContactController($scope, $timeout) {
	var scopeVar = $scope;
	var timeoutVar = $timeout;

	scopeVar.name = 'Bill Gates';

	timeoutVar(function () {
		scopeVar.name = 'Steve Jobs';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
