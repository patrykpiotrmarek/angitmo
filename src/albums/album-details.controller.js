/* global angular */
import { default as albumModuleName } from './module';
import { default as albumsServiceName } from './albums.service';

export const controllerName = "AlbumDetailsController";

class AlbumDetailsController {
	constructor(albums, albumId) {
		this.albums = albums;
		this.albumId = albumId;
	}
}
AlbumDetailsController.$inject = ['albums', 'albumId'];

export let albumsResolver = (albumsService) => {
	return albumsService.getAlbums();
};
albumsResolver.$inject = [albumsServiceName];

export let albumIdResolver = ($route) => {
	return parseInt($route.current.params.id);
};
albumIdResolver.$inject = ['$route'];

angular
	.module(albumModuleName)
	.controller(controllerName, AlbumDetailsController);