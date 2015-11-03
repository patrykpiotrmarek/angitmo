import {} from './store/main';
import {} from './app/main';

import { moduleName as appModuleName } from './app/app.module';

angular.bootstrap(document, [appModuleName]);
