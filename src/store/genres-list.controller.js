/* global angular */
import { default as storeModuleName } from './module';
import { serviceName as genresServiceName } from './genres.service';

export const controllerName = "GenresListController";

let _genres = Symbol();
class GenresListController {
	constructor(genresService) {
		this[_genres] = genresService.getGenres();
	}

	get genres() {
		return this[_genres];
	}

	get count() {
		return this.genres.length;
	}
}
GenresListController.$inject = [genresServiceName];

angular
	.module(storeModuleName)
	.controller(controllerName, GenresListController);