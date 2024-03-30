'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanySubscriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanySubscriptions.init({
    packageName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CompanySubscriptions',
  });
  return CompanySubscriptions;
};