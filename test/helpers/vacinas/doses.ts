export const initialData = [
  { ds_dose: '1ª dose', qt_aplicada: 26, tx_dose: 0.51 },
  { ds_dose: '2ª dose', qt_aplicada: 46, tx_dose: 0.64 },
  { ds_dose: 'dose de reforço', qt_aplicada: 58, tx_dose: 0.23 },
  { ds_dose: 'dose única', qt_aplicada: 83, tx_dose: 0.15 },
];

export const expected = [
  {
    label: '2ª dose',
    porcentagem: '64.00000000000000000000',
    value: '46'
  },
  {
    label: 'dose de reforço',
    porcentagem: '23.00000000000000000000',
    value: '58'
  },
  {
    label: '1ª dose',
    porcentagem: '51.00000000000000000000',
    value: '26'
  },
  {
    label: 'dose única',
    porcentagem: '15.00000000000000000000',
    value: '83'
  }
];