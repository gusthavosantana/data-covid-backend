import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  tableName: 'tb_ranges_mapa',
  timestamps: false,
  underscored: true,
})
export class RangesMapa extends Model {

  @PrimaryKey
  @Column
  declare co_cor: string;

  @PrimaryKey
  @Column
  declare no_aba: string;

  @Column
  declare vl_minimo: number;

  @Column
  declare vl_maximo: number;
}
