'use strict';

module.exports = {
  async up (queryInterface, { DataTypes }) {
    await queryInterface.createTable('tb_casos', {
      pk_casos_covid: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      pk_ubs_cnes: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      ds_casos: {
        type: DataTypes.STRING,
        allowNull: true
      },
      ds_faixa_etaria: {
        type: DataTypes.STRING,
        allowNull: true
      },
      qt_total_casos: {
        type: DataTypes.SMALLINT,
        allowNull: true
      },
      qt_novos_casos: {
        type: DataTypes.SMALLINT,
        allowNull: true
      }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_casos');
  }
};
