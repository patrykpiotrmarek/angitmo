import { default as appModule } from './app.module'
import { serviceName as genresServiceName } from '../store/genres.service';

export const controllerName = "GenresLinksController";

let _genres = Symbol();

class GenresLinksController {
  constructor(genresService) {
    this[_genres] = genresService.getGenres();
  }

  get genres() {
    return this[_genres];
  }
}

GenresLinksController.$inject = [genresServiceName];

appModule.controller(controllerName, GenresLinksController);