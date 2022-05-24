import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'tb_casos',
  timestamps: false,
  underscored: true,
})
export class Casos extends Model {
  @PrimaryKey
  @Column({ autoIncrement: true })
  declare pk_casos_covid: number;
  
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
  declare ds_casos: string;

  @Column
  declare ds_faixa_etaria: string;

  @Column
  declare qt_total_casos: number;

  @Column
  declare qt_novos_casos: number;
}
