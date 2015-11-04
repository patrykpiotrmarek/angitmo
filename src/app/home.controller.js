/* global angular */
import { default as appModuleName } from './module';
import { default as albumsServiceName } from '../albums/albums.service';

export const controllerName = "HomeController"

let _albums = Symbol();
class HomeController {

	constructor(albums) {
		this[_albums] = albums;
	}

	get albums() {
		return this[_albums];
	}
}
HomeController.inject = [];

export let albumsResolver = (albumsService) => {
	return albumsService.getTop(6);
};
albumsResolver.$inject = [albumsServiceName];

angular
	.module(appModuleName)
	.controller(controllerName, HomeController);
