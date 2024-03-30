/* Role Model */
const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Roles = sequelize.define('Roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roleName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    }
});
module.exports = Roles;

