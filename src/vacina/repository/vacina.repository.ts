import { col, fn, literal, QueryTypes } from 'sequelize';
import { Vacinas } from "../models/vacina.model";
import { IVacinaRepository } from "../ports/vacina.repository.interface";
import VacinaFilters, { where } from "../../common/types/VacinaFilters";
import RequestFilter from "../../common/types/RequestFilter";
import * as NativeQueries from '../../common/utils/native-queries';
import { groupByRegiao } from '../mappers/dados-vacina-por-regiao.mapper';

class VacinaRepository implements IVacinaRepository {
  findDoses(params: RequestFilter): Promise<Vacinas[]> {
    return Vacinas.findAll({
      where: where(params),
      attributes: [
        ['ds_dose', 'label'],
        [literal('avg(tx_dose) * 100'), 'porcentagem'],
        [fn('sum', col('qt_aplicada')), 'value'],
      ],
      group: 'ds_dose',
    });
  }
  findEstoque(params: RequestFilter): Promise<Vacinas[]> {
    return Vacinas.findAll({
      where: where(params),
      attributes: [
        'ds_dose',
        [fn('sum', col('qt_estoque')), 'quantidade_estoque'],
        [fn('sum', col('qt_aplicada')), 'quantidade_aplicada'],
        [literal(NativeQueries.PERCENTUAL_ESTOQUE_VS_APLICADA), 'porcentagem_estoque'],
        [literal(NativeQueries.PERCENTUAL_APLICADA_VS_ESTOQUE), 'porcentagem_aplicada'],
      ],
      group: 'ds_dose',
    });
  }
  async findDadosPorRegiao(params: VacinaFilters = {}) {
    const data = await Vacinas.sequelize.query(
      NativeQueries.DADOS_VACINA_POR_REGIAO(params),
      {
        type: QueryTypes.SELECT
      },
    );

    return groupByRegiao({ data });
  }
}

export const vacinaRepository = new VacinaRepository();
