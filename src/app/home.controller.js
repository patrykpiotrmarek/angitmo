/* global angular */
import { default as appModuleName } from './module';
import { default as albumsServiceName } from '../albums/albums.service';

export const controllerName = "HomeController"

class HomeController {
	constructor(albums) {
		this.albums = albums;
	}
}

export let albumsResolver = (albumsService) => {
	return albumsService.getTopAlbums(6);
};
albumsResolver.$inject = [albumsServiceName];

angular
	.module(appModuleName)
	.controller(controllerName, HomeController);
