import request from "supertest";

import app from '../src/app';
import * as CasosFactory from './factories/casos.factory';
import * as novosCasosHelper from "./helpers/casos/novos-casos";
import * as totalCasosHelper from "./helpers/casos/total-casos";
import * as dadosPorRegiaoHelper from "./helpers/casos/dados-por-regiao";
import * as casosFaixaEtariaHelper from './helpers/casos/casos-por-faixa-etaria';
import * as casosPorSituacaoHelper from './helpers/casos/casos-por-situacao';
import { Ubs } from "../src/ubs/models/ubs.model";
import { Casos } from "../src/casos/models/casos.model";

describe('Casos', () => {
  it(`/GET Novos Casos`, async () => {
    await Promise.all(novosCasosHelper.initialData.map(caso => 
      CasosFactory.create({ model: Casos, overrides: caso })
    ));

    return request(app)
      .get('/api/casos/novos-casos')
      .expect(200)
      .expect(novosCasosHelper.expected);
  });

  it(`/GET Total de Casos`, async () => {
    
    await Promise.all(totalCasosHelper.initialData.map(caso => 
      CasosFactory.create({ model: Casos, overrides: caso })
    ));

    return request(app)
      .get('/api/casos/total-casos')
      .expect(200)
      .expect(totalCasosHelper.expected);
  });

  it(`/GET Casos por faixa etaria`, async () => {
    
    await Promise.all(casosFaixaEtariaHelper.initialData.map(caso => 
      CasosFactory.create({ model: Casos, overrides: caso })
    ));

    return request(app)
      .get('/api/casos/casos-por-faixa-etaria')
      .expect(200)
      .expect(casosFaixaEtariaHelper.expected);
  });

  it(`/GET Casos por situação`, async () => {
    
    await Promise.all(casosPorSituacaoHelper.initialData.map(caso =>
      CasosFactory.create({ model: Casos, overrides: caso })
    ));

    return request(app)
      .get('/api/casos/total-casos-por-situacao')
      .expect(200)
      .expect(casosPorSituacaoHelper.expected);
  });

  it(`/GET Dados por região`, async () => {
    await Promise.all(dadosPorRegiaoHelper.ubs.map(ubs => Ubs.create(ubs)));
    await Promise.all(dadosPorRegiaoHelper.initialData.map(data => 
      CasosFactory.create({ model: Casos, overrides: data })
    ));

    return request(app)
      .get('/api/casos/dados-por-regiao')
      .expect(200)
      .expect(dadosPorRegiaoHelper.expected);
  });

  afterEach(async () => {
    await Casos.destroy({ truncate: true });
    await Ubs.destroy({ truncate: true });
  });
});