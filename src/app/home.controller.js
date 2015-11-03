import { default as appModule } from './app.module';

export const controllerName = "HomeController"
class HomeController{
	
}
HomeController.inject = [];

appModule.controller(controllerName, HomeController);

