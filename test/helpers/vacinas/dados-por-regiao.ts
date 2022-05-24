export const initialData = [
  { pk_ubs_cnes: 1, ds_dose: '1ª dose', ds_regiao: 'Região Centro-Sul', tx_dose: 0.5 },
  { pk_ubs_cnes: 2, ds_dose: '2ª dose', ds_regiao: 'Região Centro-Sul', tx_dose: 0.5 },
  { pk_ubs_cnes: 3, ds_dose: 'dose de reforço', ds_regiao: 'Região Centro-Sul', tx_dose: 0.5 },
  { pk_ubs_cnes: 4, ds_dose: 'dose única', ds_regiao: 'Região Centro-Sul', tx_dose: 0.5 },
  { pk_ubs_cnes: 5, ds_dose: '1ª dose', ds_regiao: 'Região Norte', tx_dose: 0.5 },
  { pk_ubs_cnes: 6, ds_dose: '2ª dose', ds_regiao: 'Região Norte', tx_dose: 0.5 },
  { pk_ubs_cnes: 7, ds_dose: 'dose de reforço', ds_regiao: 'Região Norte', tx_dose: 0.5 },
  { pk_ubs_cnes: 8, ds_dose: 'dose única', ds_regiao: 'Região Norte', tx_dose: 0.5 },
];

export const ubs = [
  { pk_ubs_cnes: 1, nm_estabelecimento: 'UBS 1 - Guará', ds_regiao: 'Região Centro-Sul', co_lat: "-16.00744", co_lon: "-47.98995" },
  { pk_ubs_cnes: 2, nm_estabelecimento: 'UBS 2 - Guará', ds_regiao: 'Região Centro-Sul', co_lat: "-16.00744", co_lon: "-47.98995" },
  { pk_ubs_cnes: 3, nm_estabelecimento: 'UBS 3 - Guará', ds_regiao: 'Região Centro-Sul', co_lat: "-16.00744", co_lon: "-47.98995" },
  { pk_ubs_cnes: 4, nm_estabelecimento: 'UBS 4 - Guará', ds_regiao: 'Região Centro-Sul', co_lat: "-16.00744", co_lon: "-47.98995" },
  { pk_ubs_cnes: 5, nm_estabelecimento: 'UBS 5 - Guará', ds_regiao: 'Região Norte', co_lat: "-16.00744", co_lon: "-47.98995" },
  { pk_ubs_cnes: 6, nm_estabelecimento: 'UBS 6 - Guará', ds_regiao: 'Região Norte', co_lat: "-16.00744", co_lon: "-47.98995" },
  { pk_ubs_cnes: 7, nm_estabelecimento: 'UBS 7 - Guará', ds_regiao: 'Região Norte', co_lat: "-16.00744", co_lon: "-47.98995" },
  { pk_ubs_cnes: 8, nm_estabelecimento: 'UBS 8 - Guará', ds_regiao: 'Região Norte', co_lat: "-16.00744", co_lon: "-47.98995" },
];

export const expected = {
  "REGIÃO CENTRO-SUL": {
    "1ª dose": 50,
    "2ª dose": 50,
    "dose de reforço": 50,
    "dose única": 50,
    "ubs": [
      {
        "id": 1,
        "nome": "UBS 1 - Guará",
        "latitude": "-16.00744",
        "longitude": "-47.98995",
        "regiao": "REGIÃO CENTRO-SUL"
      },
      {
        "id": 2,
        "nome": "UBS 2 - Guará",
        "latitude": "-16.00744",
        "longitude": "-47.98995",
        "regiao": "REGIÃO CENTRO-SUL"
      },
      {
        "id": 3,
        "nome": "UBS 3 - Guará",
        "latitude": "-16.00744",
        "longitude": "-47.98995",
        "regiao": "REGIÃO CENTRO-SUL"
      },
      {
        "id": 4,
        "nome": "UBS 4 - Guará",
        "latitude": "-16.00744",
        "longitude": "-47.98995",
        "regiao": "REGIÃO CENTRO-SUL"
      }
    ]
  },
  "REGIÃO NORTE": {
    "1ª dose": 50,
    "2ª dose": 50,
    "dose de reforço": 50,
    "dose única": 50,
    "ubs": [
      {
        "id": 5,
        "nome": "UBS 5 - Guará",
        "latitude": "-16.00744",
        "longitude": "-47.98995",
        "regiao": "REGIÃO NORTE"
      },
      {
        "id": 6,
        "nome": "UBS 6 - Guará",
        "latitude": "-16.00744",
        "longitude": "-47.98995",
        "regiao": "REGIÃO NORTE"
      },
      {
        "id": 7,
        "nome": "UBS 7 - Guará",
        "latitude": "-16.00744",
        "longitude": "-47.98995",
        "regiao": "REGIÃO NORTE"
      },
      {
        "id": 8,
        "nome": "UBS 8 - Guará",
        "latitude": "-16.00744",
        "longitude": "-47.98995",
        "regiao": "REGIÃO NORTE"
      }
    ]
  }
};
