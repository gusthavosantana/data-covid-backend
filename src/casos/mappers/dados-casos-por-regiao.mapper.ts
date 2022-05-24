export async function groupByRegiao({ data }) {
  const regioes: string[] = [...new Set(data.map(current => current.regiao))] as string[];
  const dadosPorRegiao = {};

  for (const current of regioes) {
    const regiao = current.toUpperCase();
    const dadosRegiao = data.filter(d => d.regiao === current);

    const calculedAttributes = dadosRegiao.reduce((previous, currentData) => {
      return {
        ...previous,
        novos_casos: previous.novos_casos + parseInt(currentData.novos_casos, 10),
        total_casos: previous.total_casos + parseInt(currentData.total_casos, 10),
      }
    }, {
      novos_casos: 0,
      total_casos: 0,
    });

    if (!dadosPorRegiao[regiao]) {
      dadosPorRegiao[regiao] = {};
    }
    dadosPorRegiao[regiao] = {
      ...calculedAttributes,
      ubs: groupUBS(dadosRegiao, regiao)
    };
  }

  return dadosPorRegiao;
}

function groupUBS(dadosRegiao, regiao) {
  const ubs = {};

  for (const {id, latitude, longitude, nome} of dadosRegiao) {
    if (!ubs[id]) {
      ubs[id] = {id, nome, latitude, longitude, regiao};
    }
  }

  return Object.values(ubs);
}