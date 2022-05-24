
export const create = async ({model, overrides}) => {
    const defaultData = {
        pk_ubs_cnes: Math.floor(Math.random() * 1000),
        ds_regiao: 'Região Central',
        tp_estabelecimento: 'UBS',
        nm_estabelecimento: 'UBS 1 - Asa Norte',
        ds_regiao_administrativa: 'Plano Piloto',
        ds_mes: '2021-01-01',
        ds_dose: '1ª dose',
        tx_dose: 0.51,
        qt_aplicada: 26,
        qt_estoque: 32,
    };

    return model.create({
        ...defaultData,
        ...overrides
    });
}