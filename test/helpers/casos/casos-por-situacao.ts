export const initialData = [
  { ds_casos: 'Ativos', qt_total_casos: 300 },
  { ds_casos: 'Recuperados', qt_total_casos: 700 },
];

export const expected = [
    {
      valor: '300',
      percentual: '30.0000000000000000',
      situacao: 'Ativos'
    },
    {
      valor: '700',
      percentual: '70.0000000000000000',
      situacao: 'Recuperados'
    }
  ];