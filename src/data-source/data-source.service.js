/* global angular */
import { default as moduleName } from './module';

export const serviceName = "DataSourceService";

const dataSourceAddress = "https://raw.githubusercontent.com/patrykpiotrmarek/musicstore/master/";

class DataSourceService {
	getDataSource(fileName) {
		return dataSourceAddress + fileName;
	}
}

let factory = () => new DataSourceService();
factory.$inject = [];

angular
	.module(moduleName)
	.service(serviceName, factory);