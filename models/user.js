
const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequlize');


const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4 
    },
    companyId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Companies',
            key: 'id'
        }
    },
    roleId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Roles',
            key: 'id'
        }
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,  
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profileImage:{
        type: DataTypes.STRING,
        allowNull:true
    },
    userVerified:{
        type: DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    emailVerifiedAt:{
        type: DataTypes.DATE,
        allowNull:true
    }

});

module.exports = Users;