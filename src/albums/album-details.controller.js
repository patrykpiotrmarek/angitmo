/* global angular */
import { default as albumModuleName } from './module';
import { default as albumsServiceName } from './albums.service';

export const controllerName = "AlbumDetailsController";

class AlbumDetailsController {
	constructor(album) {
		this.album = album;
	}
}
AlbumDetailsController.$inject = ['album'];

export let albumsResolver = (albumsService, $route) => {
	return albumsService.getAlbumById($route.current.params.id);
};
albumsResolver.$inject = [albumsServiceName, '$route'];

angular
	.module(albumModuleName)
	.controller(controllerName, AlbumDetailsController);