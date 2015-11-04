/* global angular */
import { default as storeModuleName } from './module';

export const serviceName = "GenresService";

const genres = [
	'Pop', 'Rock', 'Jazz', 'Metal', 'Electronic', 'Blues', 'Latin', 'Rap',
	'Classical', 'Alternative', 'Country', 'R&B', 'Indie', 'Punk', 'World'
];

class GenresService {
	constructor() {
	}

	getGenres(max) {
		return genres;
	}
}

let factory = () => new GenresService();
factory.$inject = [];

angular
	.module(storeModuleName)
	.service(serviceName, factory);