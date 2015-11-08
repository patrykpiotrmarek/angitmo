/* global angular */
import { default as albumsModuleName } from './module';
import { default as albumsServiceName } from './albums.service';

export const controllerName = "AlbumsListController";

let albums;
let genre;

class AlbumsListController {
	constructor(albums, genre) {
		this.albums = albums;
		this.genre = genre;
	}
}
AlbumsListController.$inject = ['albums', 'genre'];

export let albumsResolver = (albumsService) => {
	return albumsService.getAlbums();
};
albumsResolver.$inject = [albumsServiceName];

export let genreResolver = ($route) => {
	return $route.current.params.genre;
};
genreResolver.$inject = ['$route'];

angular
	.module(albumsModuleName)
	.controller(controllerName, AlbumsListController);