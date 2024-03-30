const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequlize');

const Modules = sequelize.define('Modules', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    moduleName: {
        type: DataTypes.STRING
    },
    moduleDescription: {
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

module.exports = Modules;


