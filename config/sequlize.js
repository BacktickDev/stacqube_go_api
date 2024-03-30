const { Sequelize } = require('sequelize');
const { database, username, password, host, dialect } = require('../config/config.json').development;
// const { database, username, password, host, dialect } = require('../config/config.json').production;

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect
});


  module.exports = sequelize;