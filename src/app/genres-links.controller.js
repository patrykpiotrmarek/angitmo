/* global angular */
import { default as appModuleName } from './module'
import { serviceName as genresServiceName } from '../genres/genres.service';

export const controllerName = "GenresLinksController";

let _genres = Symbol();

class GenresLinksController {
  constructor(genresService) {
    this[_genres] = genresService.getGenresQuery().query();
  }

  get genres() {
    return this[_genres];
  }
}

GenresLinksController.$inject = [genresServiceName];

angular
  .module(appModuleName)
  .controller(controllerName, GenresLinksController);