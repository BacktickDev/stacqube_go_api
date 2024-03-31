'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ModulePermissions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      moduleId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Modules',
          key: 'id'
        }
      },
      subModuleId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'SubModules',
          key: 'id'
        }
      },
      permissionName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      permissionLabel: {
        type: Sequelize.STRING,
        allowNull: false
      },
      permissionStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
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
    await queryInterface.dropTable('ModulePermissions');
  }
};