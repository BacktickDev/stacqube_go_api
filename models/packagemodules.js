
const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequlize');
const CompanySubscriptions = require('./companysubscriptions');
const Modules = require('./modules');
const SubscriptionPackage = require('./subsciptionpackage');

const PackageModules = sequelize.define('PackageModules', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    packageId: {
        type: DataTypes.UUID,
        references: {
            model: 'SubscriptionPackage',
            key: 'id'
        }
    },
    moduleId: {
        type: DataTypes.UUID,
        references: {
            model: 'Modules',
            key: 'id'
        }
    },
   
});

PackageModules.belongsTo(SubscriptionPackage, {
    foreignKey: 'packageId'
});


PackageModules.hasMany(Modules, {
    foreignKey: 'id',
    sourceKey: 'moduleId'

});







module.exports = PackageModules;
