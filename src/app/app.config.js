import { moduleName } from './app.module';

function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'homeController',
			controllerAs: 'ctrl'
		})
		.otherwise({ redirectTo: '/' });
}

config.$inject = ['$routeProvider'];

angular.module(moduleName).config(config);