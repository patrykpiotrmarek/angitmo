/* global $filter */
/* global angular */
import { default as albumsModuleName } from './module';
import { serviceName as dataSourceServiceName } from '../data-source/data-source.service'

const serviceName = "albumsService";

class AlbumsService {
	constructor($resource, jsonPath) {
	    this.resource = $resource;
		this.jsonPath = jsonPath;
	}
	
	getTopAlbums(count) {
		let transformResponseFunc = (albums) => albums.slice(0, count);
		return this.getAlbums(transformResponseFunc);
	}
	
	getAlbumById(id) {
		let transformResponseFunc = (albums) => albums.find((album) => album.AlbumId === parseInt(id));
		return this.getAlbums(transformResponseFunc, false);
	}
	
	getAlbumsByGenre(genre) {
		let transformResponseFunc = (albums) => albums.filter((album) => album.Genre.Name === genre);
		return this.getAlbums(transformResponseFunc);
	}

	getAlbums(transformResponse, isArray = true) {
		let jsonTransformResponse = (rawAlbums) => {
			let albums = JSON.parse(rawAlbums);
			return transformResponse(albums);
		};
		
		let albums = this.resource(this.jsonPath, {}, {
			query: { method: 'GET', params: {}, isArray: isArray, transformResponse: jsonTransformResponse }
		}).query();
		return albums;
	}
}

let serviceFactory = ($resource, dataSourceService) => new AlbumsService($resource, dataSourceService.getDataSource("albums.json"));
serviceFactory.$inject = ['$resource', dataSourceServiceName];

angular
	.module(albumsModuleName)
	.service(serviceName, serviceFactory);

export default serviceName;