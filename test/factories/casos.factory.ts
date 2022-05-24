
export const create = async ({model, overrides}) => {
    const defaultData = {
        pk_ubs_cnes: Math.floor(Math.random() * 1000),
        ds_regiao: 'Região Sul',
        tp_estabelecimento: 'UBS',
        nm_estabelecimento: 'UBS 1 - Asa Norte',
        ds_regiao_administrativa: 'Plano Piloto',
        ds_mes: '2021-01-01',
        ds_casos: 'Recuperados',
        ds_faixa_etaria: '19 a 29',
        qt_total_casos: 100,
        qt_novos_casos: 100,
    };

    return model.create({
        ...defaultData,
        ...overrides
    });
}
