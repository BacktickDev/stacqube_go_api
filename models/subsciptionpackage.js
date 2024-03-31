
const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequlize');

const SubscriptionPackage = sequelize.define('SubscriptionPackage', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    packageName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    packageDescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    packagePrice: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    packageDurationType: {
        type: DataTypes.STRING,
        allowNull: false    
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    }
});



module.exports = SubscriptionPackage;
