import request from "supertest";

import app from '../src/app';
import { Vacinas } from '../src/vacina/models/vacina.model';
import * as VacinaFactory from './factories/vacina.factory';
import * as dosesHelper from "./helpers/vacinas/doses";
import * as estoqueHelper from "./helpers/vacinas/estoque";
import * as dadosPorRegiaoHelper from "./helpers/vacinas/dados-por-regiao";
import { Ubs } from "../src/ubs/models/ubs.model";

describe('Vacinas', () => {
  it(`/GET Doses`, async () => {
    await Promise.all(dosesHelper.initialData.map(dose => 
      VacinaFactory.create({
        model: Vacinas,
        overrides: dose
      })
    ));

    return request(app)
      .get('/api/vacinas/doses')
      .expect(200)
      .expect(dosesHelper.expected);
  });

  it(`/GET Estoque`, async () => {
    
    await Promise.all(estoqueHelper.initialData.map(dose => 
      VacinaFactory.create({
        model: Vacinas,
        overrides: dose
      })
    ));

    return request(app)
      .get('/api/vacinas/estoque')
      .expect(200)
      .expect(estoqueHelper.expected);
  });

  it(`/GET Dados por região`, async () => {
    await Promise.all(dadosPorRegiaoHelper.ubs.map(ubs => Ubs.create(ubs)));
    await Promise.all(dadosPorRegiaoHelper.initialData.map(data => 
      VacinaFactory.create({
        model: Vacinas,
        overrides: data
      })
    ));

    return request(app)
      .get('/api/vacinas/dados-por-regiao')
      .expect(200)
      .expect(dadosPorRegiaoHelper.expected);
  });

  afterEach(async () => {
    await Vacinas.destroy({ truncate: true });
    await Ubs.destroy({ truncate: true });
  });  
});
