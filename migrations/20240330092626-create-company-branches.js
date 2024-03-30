'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CompanyBranches', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      companyId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Companies',
          key: 'id'
        }
      },
      branchName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      branchAddress: {
        type: Sequelize.STRING,
        allowNull: true
      },
      branchEmail: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      branchPhone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      branchStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true
      },
      branchWebsite: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('CompanyBranches');
  }
};