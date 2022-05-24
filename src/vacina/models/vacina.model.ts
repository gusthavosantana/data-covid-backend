import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'tb_vacinas',
  timestamps: false,
  underscored: true,
})
export class Vacinas extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  declare pk_vacina: number;

  @Column
  declare pk_ubs_cnes: number;

  @Column
  declare ds_regiao: string;

  @Column
  declare tp_estabelecimento: string;

  @Column
  declare nm_estabelecimento: string;

  @Column
  declare ds_regiao_administrativa: string;

  @Column
  declare ds_mes: string;

  @Column
  declare ds_dose: string;

  @Column
  declare tx_dose: number;

  @Column
  declare qt_aplicada: number;

  @Column
  declare qt_estoque: number;
}
