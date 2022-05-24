export const initialData = [
  { ds_faixa_etaria: '- 18', qt_total_casos: 50 },
  { ds_faixa_etaria: '19 a 29', qt_total_casos: 100 },
  { ds_faixa_etaria: '30 a 39', qt_total_casos: 100 },
  { ds_faixa_etaria: '40 a 49', qt_total_casos: 100 },
  { ds_faixa_etaria: '50 a 59', qt_total_casos: 100 },
  { ds_faixa_etaria: '+ 60', qt_total_casos: 100 },
];

export const expected = [
  { faixa_etaria: '+ 60', total_casos: '100' },
  { faixa_etaria: '19 a 29', total_casos: '100' },
  { faixa_etaria: '- 18', total_casos: '50' },
  { faixa_etaria: '40 a 49', total_casos: '100' },
  { faixa_etaria: '50 a 59', total_casos: '100' },
  { faixa_etaria: '30 a 39', total_casos: '100' }
];