/* global angular */
import { default as genresModuleName } from '../genres/module';
import { default as albumsModuleName } from '../albums/module';

const moduleName = 'app';

angular.module(moduleName, ['ngRoute', genresModuleName, albumsModuleName]);

export default moduleName;