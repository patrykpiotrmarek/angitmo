import { default as musicStoreModule } from './app.module'

export const controllerName = "HomeController";

class HomeController{
  constructor(){
  }
}

HomeController.$inject = [];

musicStoreModule.controller(controllerName, HomeController);

export default HomeController;