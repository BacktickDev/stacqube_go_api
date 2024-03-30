'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      companyLogo:{
        type: Sequelize.STRING,
        allowNull: true
      },
      favIcon:{
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: false
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      companyAddress: {
        type: Sequelize.STRING,
        allowNull:true
      },

      companyEmail: {
        type: Sequelize.STRING,
        allowNull: true,
        unique:true,  
      },
      companyPhone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      companyStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true
      },
      companyWebsite:{
        type: Sequelize.STRING,
        allowNull:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Companies');
  }
};