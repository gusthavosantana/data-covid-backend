import { col, fn, literal, QueryTypes } from 'sequelize';
import { Casos } from "../models/casos.model";
import { ICasosRepository } from "../ports/casos.repository.interface";
import RequestFilter from "../../common/types/RequestFilter";
import * as NativeQueries from '../../common/utils/native-queries';
import { groupByRegiao } from '../mappers/dados-casos-por-regiao.mapper';
import { sequelizeWhere } from '../../common/utils/where-builder';
import { sequelize } from '../../infra/database/sequelize';

const excludedFields: string[] = [
  'pk_ubs_cnes',
  'ds_regiao',
  'tp_estabelecimento',
  'nm_estabelecimento',
  'ds_endereco',
  'ds_complemento',
  'nu_numero',
  'ds_regiao_administrativa',
  'ds_mes',
  'ds_casos',
  'ds_faixa_etaria',
  'qt_total_casos',
  'qt_novos_casos',
  'tx_sintomas_leves',
  'tx_sintomas_graves',
  'tx_assintomaticos',
  'tx_homens',
  'tx_mulheres',
];

class CasosRepository implements ICasosRepository {
  findCasosPorFaixaEtaria(params: RequestFilter): Promise<Casos[]> {
    return Casos.findAll({
      where: sequelizeWhere(params),
      attributes: [
        ['ds_faixa_etaria', 'faixa_etaria'],
        [fn('sum', col('qt_total_casos')), 'total_casos'],
      ],
      group: 'ds_faixa_etaria',
    });
  }
  async findNovosCasos(params: RequestFilter = {}): Promise<Casos> {
    return Casos.findOne({
      where: sequelizeWhere(params),
      attributes: [
        [fn('coalesce', fn('sum', col('qt_novos_casos')), 0), 'valor'],
      ],
    });
  }

  async findTotalCasos(params: RequestFilter) {
    return Casos.findOne({
      where: sequelizeWhere(params),
      attributes: [
        [fn('sum', col('qt_total_casos')), 'valor'],
      ],
    });
  }

  async findTotaoCasosPorSituacao(params: RequestFilter) {
    return Casos.findAll({
      where: sequelizeWhere(params),
      attributes: [
        [
          fn('coalesce', fn('sum', col('qt_total_casos')), 0),
          'valor',
        ],
        [
          literal(NativeQueries.PERCENTUAL_SITUACAO_PACIENTE(params)),
          'percentual',
        ],
        ['ds_casos', 'situacao'],
      ],
      group: 'ds_casos',
    });
  }

  async findDadosPorRegiao(params: RequestFilter = {}) {
    const data = await sequelize.query(
      NativeQueries.DADOS_CASOS_POR_REGIAO(params),
      {
        type: QueryTypes.SELECT
      },
    );

    return groupByRegiao({ data });
  }
}

export const casosRepository = new CasosRepository();
