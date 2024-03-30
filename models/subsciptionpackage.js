'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubsciptionPackage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubsciptionPackage.init({
    packageName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SubsciptionPackage',
  });
  return SubsciptionPackage;
};