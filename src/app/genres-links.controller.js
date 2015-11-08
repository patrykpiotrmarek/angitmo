/* global angular */
import { default as appModuleName } from './module'
import { serviceName as genresServiceName } from '../genres/genres.service';

export const controllerName = "GenresLinksController";

let genres;

class GenresLinksController {
  constructor(genresService) {
    this.genres = genresService.getGenres();
  }
}

GenresLinksController.$inject = [genresServiceName];

angular
  .module(appModuleName)
  .controller(controllerName, GenresLinksController);