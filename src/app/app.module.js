import { moduleName as storeModuleName } from '../store/store.module';

export const moduleName = 'app';

let appModule = angular.module(moduleName, ['ngRoute', storeModuleName]);

export default appModule;