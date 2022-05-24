'use strict';

module.exports = {
  async up (queryInterface, { DataTypes }) {
    await queryInterface.createTable('tb_vacinas', {
      pk_vacina: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      pk_ubs_cnes: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      ds_regiao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tp_estabelecimento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nm_estabelecimento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ds_regiao_administrativa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ds_mes: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      ds_dose: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      tx_dose: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      qt_aplicada: {
        type: DataTypes.SMALLINT,
        allowNull: true
      },
      qt_estoque: {
        type: DataTypes.SMALLINT,
        allowNull: true
      }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_vacinas');
  }
};
