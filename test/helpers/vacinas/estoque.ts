export const initialData = [
  { ds_dose: '1ª dose', qt_aplicada: 100, qt_estoque: 50 },
  { ds_dose: '2ª dose', qt_aplicada: 100, qt_estoque: 50 },
  { ds_dose: 'dose de reforço', qt_aplicada: 50, qt_estoque: 50 },
  { ds_dose: 'dose única', qt_aplicada: 100, qt_estoque: 50 },
];

export const expected = [
  {
    ds_dose: '2ª dose',
    quantidade_estoque: '50',
    quantidade_aplicada: '100',
    porcentagem_estoque: '33.3333333333333333',
    porcentagem_aplicada: '66.6666666666666667'
  },
  {
    ds_dose: 'dose de reforço',
    quantidade_estoque: '50',
    quantidade_aplicada: '50',
    porcentagem_estoque: '50.0000000000000000',
    porcentagem_aplicada: '50.0000000000000000'
  },
  {
    ds_dose: '1ª dose',
    quantidade_estoque: '50',
    quantidade_aplicada: '100',
    porcentagem_estoque: '33.3333333333333333',
    porcentagem_aplicada: '66.6666666666666667'
  },
  {
    ds_dose: 'dose única',
    quantidade_estoque: '50',
    quantidade_aplicada: '100',
    porcentagem_estoque: '33.3333333333333333',
    porcentagem_aplicada: '66.6666666666666667'
  }
];