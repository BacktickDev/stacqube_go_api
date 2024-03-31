
const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequlize');

const RolePermissions = sequelize.define('RolePermissions', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    roleId: {
        type: DataTypes.UUID,
        references: {
            model: 'Roles',
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
    modulePermissionId: {
        type: DataTypes.UUID,
        references: {
            model: 'ModulePermissions',
            key: 'id'
        }
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

module.exports = RolePermissions;
