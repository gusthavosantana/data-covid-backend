'use strict';

module.exports = {
  async up (queryInterface, { DataTypes }) {
    await queryInterface.createTable('tb_ubs', {
      pk_ubs_cnes: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      ds_regiao: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ds_bairro: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tp_estabelecimento: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nm_estabelecimento: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ds_regiao_administrativa: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      co_lat: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      co_lon: {
        type: DataTypes.DECIMAL,
        allowNull: true
      }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_ubs');
  }
};
