/* global angular */
import { default as dataSourceModuleName } from '../data-source/module';

const moduleName = "genres";

angular.module(moduleName, ['ngResource', dataSourceModuleName]);

export default moduleName; 