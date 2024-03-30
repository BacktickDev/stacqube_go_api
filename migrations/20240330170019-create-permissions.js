'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Permissions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4

      },
      permissionName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      permissionLabel: {
        type: Sequelize.STRING,
        allowNull: false
      },
      moduleId:{
        type: Sequelize.UUID,
        references: {
          model: 'Modules',
          key: 'id'
        }
      },
      subModuleId:{
        type: Sequelize.UUID,
        references: {
          model: 'SubModules',
          key: 'id'
        }
      },
      companyId:{
        type: Sequelize.UUID,
        references: {
          model: 'Companies',
          key: 'id'
        }
      },
      status:{
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
    await queryInterface.dropTable('Permissions');
  }
};