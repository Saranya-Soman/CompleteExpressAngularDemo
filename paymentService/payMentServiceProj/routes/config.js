var mysql = require('mysql2');
var Sequelize = require('sequelize');

var seql = new Sequelize('test', 'root', 'admin', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
   
});

module.exports = seql;