/* Role Model */
const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequlize');

const Roles = sequelize.define('Roles', {
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

