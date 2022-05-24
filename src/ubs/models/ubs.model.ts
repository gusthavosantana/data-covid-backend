import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'tb_ubs',
  timestamps: false,
  underscored: true,
})
export class Ubs extends Model {
  @PrimaryKey
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
  declare co_lat: number;

  @Column
  declare co_lon: number;
}
