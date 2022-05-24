import RequestFilter from '../types/RequestFilter';
import { nativeWhere } from './where-builder';

export const TOTAL_CASOS = ({ ds_mes }: { ds_mes: string }) => {
  return `(select sum(c.qt_total_casos) from tb_casos c where c.ds_mes = '${ds_mes}')`.trim();
};

export const NOVOS_CASOS = ({ inicio, fim, ...params }: { inicio: string, fim: string }) => {
  return `(select coalesce(sum(c.qt_novos_casos), 0) from tb_casos c ${nativeWhere(
    { ...params, inicio, fim },
    'c',
  )})`.trim();
};

export const PERCENTUAL_ESTOQUE_VS_APLICADA = `
  (100 * sum(qt_estoque)::decimal / sum(qt_estoque + qt_aplicada))
`.trim();

export const PERCENTUAL_APLICADA_VS_ESTOQUE = `
  (100 * sum(qt_aplicada)::decimal / sum(qt_estoque + qt_aplicada))
`.trim();

export const PERCENTUAL_SITUACAO_PACIENTE = (params) => {
  return `(100 * sum(qt_total_casos)::decimal / (select sum(qt_total_casos) from tb_casos ${nativeWhere(params)}))`;
}

export const DADOS_VACINA_POR_REGIAO = (params: RequestFilter) => `
  SELECT 
    Vacinas.ds_regiao, 
    Vacinas.ds_dose,
    Ubs.pk_ubs_cnes as id,
    Ubs.nm_estabelecimento as nome,
    Ubs.co_lat as latitude,
    Ubs.co_lon as longitude,
    avg(tx_dose) * 100 as porcentagem_aplicada
  FROM tb_vacinas AS Vacinas
  LEFT JOIN tb_ubs Ubs 
    ON Ubs.pk_ubs_cnes = Vacinas.pk_ubs_cnes 
  ${nativeWhere(params, 'Vacinas')}
  GROUP BY
    Vacinas.ds_regiao,
    Vacinas.ds_dose,
    Ubs.pk_ubs_cnes,
    Ubs.nm_estabelecimento,
    Ubs.co_lat,
    Ubs.co_lon;
`.trim();

export const DADOS_CASOS_POR_REGIAO = (params: RequestFilter) => `
  SELECT 
    Casos.ds_regiao AS regiao, 
    coalesce(sum(Casos."qt_novos_casos"), 0) AS "novos_casos",
    coalesce(sum(Casos."qt_total_casos"), 0) AS "total_casos",
    (
      (
        (
          (select coalesce(sum(c.qt_novos_casos), 0)::decimal from tb_casos c  ${nativeWhere(params, 'Casos')}) / 
          (select coalesce(sum(c.qt_novos_casos), 1)::decimal from tb_casos c  ${nativeWhere(params, 'Casos')}))
    - 1)
      * 100
    ) AS "variacao_novos_casos", (
      (
        (
          (select sum(c.qt_total_casos)::decimal from tb_casos c ${nativeWhere(params, 'Casos')}) / 
          (select sum(c.qt_total_casos)::decimal from tb_casos c ${nativeWhere(params, 'Casos')}))
    - 1)
      * 100
    ) AS variacao_total_casos ,
    Ubs.nm_estabelecimento as nome_ubs,
    Ubs.co_lat as latitude,
    Ubs.co_lon as longitude
  FROM tb_casos AS Casos 
  LEFT JOIN tb_ubs Ubs 
    ON Ubs.pk_ubs_cnes = Casos.pk_ubs_cnes 
  ${nativeWhere({ ...params }, 'Casos')}
  GROUP BY 
    Casos.ds_regiao,
    Ubs.nm_estabelecimento,
    Ubs.co_lat,
    Ubs.co_lon
`.trim();
