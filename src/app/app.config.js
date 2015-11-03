import { default as musicStoreModule } from './app.module'
import { controllerName as homeControllerName} from './home.controller'

function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/home.html',
			controller: homeControllerName,
			controllerAs: 'ctrl'
		})
		.otherwise({ redirectTo: '/' });
}

config.$inject = ['$routeProvider'];

musicStoreModule
	.config(config);