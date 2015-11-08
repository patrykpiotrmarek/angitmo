/* global angular */
import { default as appModuleName } from './module';
import { default as albumsServiceName } from '../albums/albums.service';

export const controllerName = "HomeController"

class HomeController {
	constructor(albums) {
		this.albums = albums;
		this.limit = 6;
	}
}

export let albumsResolver = (albumsService) => {
	return albumsService.getAlbums();
};
albumsResolver.$inject = [albumsServiceName];

angular
	.module(appModuleName)
	.controller(controllerName, HomeController);
