const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequlize');

const SubModules = sequelize.define('SubModules', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    moduleId: {
        type: DataTypes.UUID,
        references: {
            model: 'Modules',
            key: 'id'
        }
    },
    subModuleName: {
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

module.exports = SubModules;
