
const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequlize');
const PackageModules = require('./packagemodules');
const Companies = require('./company');
const SubscriptionPackage = require('./subsciptionpackage');

const CompanySubscriptions = sequelize.define('CompanySubscriptions', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    companyId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Companies',
            key: 'id'
        }
    },
    packageModuleId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'PackageModules',
            key: 'id'
        }
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    }
})

CompanySubscriptions.belongsTo(Companies, {
    foreignKey: 'companyId'
});




CompanySubscriptions.hasMany(PackageModules, {
    foreignKey: 'id',
    sourceKey: 'packageModuleId'
    
});


module.exports = CompanySubscriptions;
