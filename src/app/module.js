/* global angular */
import { default as storeModuleName } from '../store/module';

const moduleName = 'app';

angular.module(moduleName, ['ngRoute', storeModuleName]);

export default moduleName;