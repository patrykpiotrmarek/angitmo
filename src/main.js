/* global angular */
import {} from './store/main';
import {} from './app/main';

import { default as appModuleName } from './app/module';

angular.bootstrap(document, [appModuleName]);
