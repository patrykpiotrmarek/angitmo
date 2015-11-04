/* global angular */
import { default as albumsModuleName } from './module';
import { default as albumsServiceName } from './albums.service';

export const controllerName = "AlbumsListController";

class AlbumsListController {
	constructor(albums) {
		this.albums = albums;
	}
}
AlbumsListController.$inject = ['albums'];

export let albumsResolver = (albumsService, $route) => {
	return albumsService.getByGenre($route.current.params.genre);

};
albumsResolver.$inject = [albumsServiceName, '$route'];

angular
	.module(albumsModuleName)
	.controller(controllerName, AlbumsListController);