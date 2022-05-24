export const initialData = [
  { pk_ubs_cnes: 1, ds_regiao: 'Região Sul', qt_novos_casos: 100, qt_total_casos: 200 },
];

export const ubs = [
  { pk_ubs_cnes: 1, nm_estabelecimento: 'UBS 1 - Guará', ds_regiao: 'Região Sul', co_lat: "-16.00744", co_lon: "-47.98995" },
  { pk_ubs_cnes: 2, nm_estabelecimento: 'UBS 2 - Guará', ds_regiao: 'Região Sul', co_lat: "-16.00744", co_lon: "-47.98995" },
];

export const expected = {
  "REGIÃO SUL":{
    "novos_casos":100,
    "total_casos":200,
    "ubs":[
      {
        "latitude":"-16.00744",
        "longitude":"-47.98995",
        "regiao":"REGIÃO SUL"
      }
    ]
  }
};