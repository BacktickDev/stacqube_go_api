
const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequlize');

const CompanyBranches = sequelize.define('CompanyBranches', { 
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4 
    },
    companyId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    branchName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    branchAddress: {
        type: DataTypes.STRING,
        allowNull: true
    },
    branchEmail: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    branchPhone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    branchStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    branchWebsite: {
        type: DataTypes.STRING,
        allowNull: true
    }

});

module.exports = CompanyBranches;
