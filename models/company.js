
/* Company Model */
const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Companies = sequelize.define('Companies', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4 
    },
    companyLogo:{
        type: DataTypes.STRING,
        allowNull: true
    },
    favIcon:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: false
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    companyAddress: {
        type: DataTypes.STRING,
        allowNull:true
    },

    companyEmail: {
        type: DataTypes.STRING,
        allowNull: true,
        unique:true,  
    },
    companyPhone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    companyStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    companyWebsite:{
        type: DataTypes.STRING,
        allowNull:true
    }
});

module.exports = Companies;

