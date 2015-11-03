import { default as storeModule } from './store.module';

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

storeModule.directive(directiveName, directiveFactory);