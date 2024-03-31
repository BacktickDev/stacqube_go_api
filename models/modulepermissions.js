
const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequlize');
const Modules = require('./modules');
const SubModules = require('./submodules');


const ModulePermissions = sequelize.define('ModulePermissions', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    moduleId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Modules',
            key: 'id'
        }
    },
    subModuleId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'SubModules',
            key: 'id'
        }
    },
    permissionName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permissionLabel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permissionStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },

    
});

ModulePermissions.belongsTo(Modules, {
    foreignKey: 'moduleId',
    as: 'module'
});

ModulePermissions.belongsTo(SubModules, {
    foreignKey: 'subModuleId',
    as: 'subModule'
})






module.exports = ModulePermissions;