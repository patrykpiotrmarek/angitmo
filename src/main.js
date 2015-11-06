/* global angular */
import {} from './genres/main';
import {} from './albums/main';
import {} from './data-source/main';
import {} from './app/main';

import { default as appModuleName } from './app/module';

angular.bootstrap(document, [appModuleName]);
