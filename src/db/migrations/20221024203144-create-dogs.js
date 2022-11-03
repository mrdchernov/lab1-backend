'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      breed_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      experience_required: {
        type: Sequelize.INTEGER,
        min: 0,
        max: 3
      },
      walk_distance: {
        type: Sequelize.INTEGER,
        min: 0,
        max: 3
      },
      dog_size: {
        type: Sequelize.INTEGER,
        min: 0,
        max: 5
      },
      grooming_time: {
        type: Sequelize.INTEGER,
        min: 0,
        max: 3
      },
      guard: {
        type: Sequelize.INTEGER,
        min: 0,
        max: 3
      },
      drools: {
        type: Sequelize.INTEGER,
        min: 0,
        max: 1
      },
      allergy: {
        type: Sequelize.INTEGER,
        min: 0,
        max: 1
      },
      noise: {
        type: Sequelize.INTEGER,
        min: 0,
        max: 3
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
    await queryInterface.dropTable('dogs');
  }
};