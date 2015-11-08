/* global $filter */
/* global angular */
import { default as albumsModuleName } from './module';
import { serviceName as dataSourceServiceName } from '../data-source/data-source.service'

const serviceName = "albumsService";

class AlbumsService {
	constructor($resource, dataSourceService) {
	    this.resource = $resource;
		this.jsonPath = dataSourceService.getDataSource("albums.json");
	}

	getAlbums() {
		let albums = this.resource(this.jsonPath, {}, {
			query: { method: 'GET', params: {}, isArray: true }
		}).query();
		return albums;
	}
}
let serviceFactory = ($resource, dataSourceService) => new AlbumsService($resource, dataSourceService);
serviceFactory.$inject = ['$resource', dataSourceServiceName];

angular
	.module(albumsModuleName)
	.service(serviceName, serviceFactory);

export default serviceName;