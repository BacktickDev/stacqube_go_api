const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequlize');
const SubModules = require('./submodules');



const Modules = sequelize.define('Modules', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    moduleName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    moduleDescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

Modules.hasMany(SubModules, {
    foreignKey: 'moduleId',
    as: 'submodules'
});



module.exports = Modules;


