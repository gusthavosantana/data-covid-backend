'use strict';

module.exports = {
  async up (queryInterface, { DataTypes }) {
    await queryInterface.createTable('tb_ranges_mapa', {
      co_cor: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      no_aba: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      vl_minimo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      vl_maximo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });

  },

  async down (queryInterface) {
    await queryInterface.dropTable('tb_ranges_mapa');
  }
};
