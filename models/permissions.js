
const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequlize');

const Permissions = sequelize.define('Permissions', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    permissionName: {
        type: DataTypes.STRING
    },

    permissionLabel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    moduleId:{
        type: DataTypes.UUID,
        references: {
            model: 'Modules',
            key: 'id'
        }
    },
    subModuleId:{
        type: DataTypes.UUID,
        references: {
            model: 'SubModules',
            key: 'id'
        }
    },
    companyId:{
        type: DataTypes.UUID,
        references: {
            model: 'Companies',
            key: 'id'
        }
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

module.exports = Permissions;
