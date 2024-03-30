
const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequlize');

const CompanySubscriptions = sequelize.define('CompanySubscriptions', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    companyId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    packageId: {
        type: DataTypes.UUID,
        allowNull: false
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

module.exports = CompanySubscriptions;
