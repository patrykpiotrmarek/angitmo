/* global angular */
import { default as appModuleName } from './module'
import { controllerName as homeControllerName } from './home.controller'
import { controllerName as genresListConrollerName } from '../store/genres-list.controller'

function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/home.html',
			controller: homeControllerName,
			controllerAs: 'ctrl'
		})
		.when('/store', {
			templateUrl: 'store/genres-list.html',
			controller: genresListConrollerName,
			controllerAs: 'ctrl'
		})
		.otherwise({ redirectTo: '/' });
}

config.$inject = ['$routeProvider'];

angular
	.module(appModuleName)
	.config(config);