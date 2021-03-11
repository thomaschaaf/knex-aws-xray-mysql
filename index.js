const captureMySQL = require('aws-xray-sdk-mysql');

const mysql2 = require('mysql2');
const MySql2Dialect = require('knex/lib/dialects/mysql2');

const awsXRayMysql = captureMySQL(mysql2);
MySql2Dialect.prototype._driver = () => awsXRayMysql;

module.exports = MySql2Dialect;
