/* global angular */
import { default as storeModuleName } from './module';

export const directiveName = "browseByGenre";

class BrowseByGenreDirective {
	constructor() {
		this.restrict = 'E';
		this.require = '=ngModel';
		this.scope = { ngModel: '=' };
		this.template = '<a href="#/store/browse?genres={{ngModel}}">{{ngModel}}</a>';
		this.replace = true;
	}
}

let directiveFactory = () => new BrowseByGenreDirective();
directiveFactory.$inject = [];

angular
	.module(storeModuleName)
	.directive(directiveName, directiveFactory);