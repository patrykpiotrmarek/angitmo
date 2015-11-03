import { moduleName } from './app.module' 
class HomeController{
  constructor(){
  }
}

HomeController.$inject = [];

angular.module(moduleName, [HomeController]);

export default HomeController;