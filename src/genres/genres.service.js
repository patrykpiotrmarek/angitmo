/* global angular */
import { default as genresModuleName } from './module';
import { serviceName as dataSourceServiceName } from '../data-source/data-source.service'

export const serviceName = "GenresService";

let resource;
let jsonPath;

class GenresService {
	constructor($resource, dataSourceService) {
		this.resource = $resource;
		this.jsonPath = dataSourceService.getDataSource("genres.json");
	}
	
	getGenres() {
		let genres = this.resource(this.jsonPath, {}, {
      		query: { method: 'GET', params: {}, isArray: true }
		}).query()
		return genres;
	}
}

let factory = ($resource, dataSourceService) => new GenresService($resource, dataSourceService);
factory.$inject = ["$resource", dataSourceServiceName];

angular
	.module(genresModuleName)
	.service(serviceName, factory);