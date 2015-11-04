/* global angular */
import { default as appModuleName } from './module';

export const controllerName = "HomeController"
class HomeController {

}
HomeController.inject = [];

angular
	.module(appModuleName)
	.controller(controllerName, HomeController);

