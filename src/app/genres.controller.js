import { default as appModule } from './app.module'

export const controllerName = "GenresController";

let _genres = Symbol();

class GenresController {
  constructor() {
    this[_genres] = ['Pop', 'Rock', 'Jazz', 'Metal', 'Electronic', 'Blues', 'Latin', 'Rap', 'Classical'];
  }
  
  get genres(){
    return this[_genres];
  }
}

GenresController.$inject = [];

appModule.controller(controllerName, GenresController);