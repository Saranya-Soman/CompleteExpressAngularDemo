var Sequelize = require('sequelize');
var seql = require('../routes/config');

var Customer = seql.define('paymentdetails',{
    "userId": {
        type:Sequelize.INTEGER,
        primaryKey: true
    },
    "userName": {
        type:Sequelize.STRING
    },
    "creditLimit":{
        type: Sequelize.INTEGER
    },
    "amountDue":{
        type:Sequelize.INTEGER
    }
    
}, {timestamps:false});

module.exports = Customer;