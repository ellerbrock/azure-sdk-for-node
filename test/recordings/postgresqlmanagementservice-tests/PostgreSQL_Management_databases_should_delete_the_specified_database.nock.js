// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'd466671a-79ad-4ca5-878f-599df8bcd17e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver3266/databases/testdb4417?api-version=2017-04-30-preview')
  .reply(202, "{\"operation\":\"DropElasticServerDatabase\",\"startTime\":\"2017-05-25T00:08:32.757Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '80',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/operationResults/e5344e7b-36ac-474c-8700-6888633006d3?api-version=2017-04-30-preview',
  'retry-after': '15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/e5344e7b-36ac-474c-8700-6888633006d3?api-version=2017-04-30-preview',
  'x-ms-request-id': 'e5344e7b-36ac-474c-8700-6888633006d3',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '7e48f782-3f6c-41b5-9076-320c02380f74',
  'x-ms-routing-request-id': 'EASTUS:20170525T000833Z:7e48f782-3f6c-41b5-9076-320c02380f74',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:08:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/resourceGroups/nodeTestGroup5834/providers/Microsoft.DBforPostgreSQL/servers/testserver3266/databases/testdb4417?api-version=2017-04-30-preview')
  .reply(202, "{\"operation\":\"DropElasticServerDatabase\",\"startTime\":\"2017-05-25T00:08:32.757Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '80',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/operationResults/e5344e7b-36ac-474c-8700-6888633006d3?api-version=2017-04-30-preview',
  'retry-after': '15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/e5344e7b-36ac-474c-8700-6888633006d3?api-version=2017-04-30-preview',
  'x-ms-request-id': 'e5344e7b-36ac-474c-8700-6888633006d3',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '7e48f782-3f6c-41b5-9076-320c02380f74',
  'x-ms-routing-request-id': 'EASTUS:20170525T000833Z:7e48f782-3f6c-41b5-9076-320c02380f74',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:08:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/e5344e7b-36ac-474c-8700-6888633006d3?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"e5344e7b-36ac-474c-8700-6888633006d3\",\"status\":\"Succeeded\",\"startTime\":\"2017-05-25T00:08:32.757Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f74123c6-0704-4da8-84e6-d8ce1d8cc377',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14683',
  'x-ms-correlation-request-id': 'd19e12ce-40c7-471e-a481-8fbb45a9ba6e',
  'x-ms-routing-request-id': 'EASTUS:20170525T000903Z:d19e12ce-40c7-471e-a481-8fbb45a9ba6e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:09:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/d466671a-79ad-4ca5-878f-599df8bcd17e/providers/Microsoft.DBforPostgreSQL/locations/westus/azureAsyncOperation/e5344e7b-36ac-474c-8700-6888633006d3?api-version=2017-04-30-preview')
  .reply(200, "{\"name\":\"e5344e7b-36ac-474c-8700-6888633006d3\",\"status\":\"Succeeded\",\"startTime\":\"2017-05-25T00:08:32.757Z\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '107',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f74123c6-0704-4da8-84e6-d8ce1d8cc377',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14683',
  'x-ms-correlation-request-id': 'd19e12ce-40c7-471e-a481-8fbb45a9ba6e',
  'x-ms-routing-request-id': 'EASTUS:20170525T000903Z:d19e12ce-40c7-471e-a481-8fbb45a9ba6e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 May 2017 00:09:02 GMT',
  connection: 'close' });
 return result; }]];