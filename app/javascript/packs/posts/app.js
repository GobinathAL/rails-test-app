angular.module('post', ['ui.router'])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		template: '<div>HOME</div>'
	})
	$urlRouterProvider.otherwise('/')
}])
