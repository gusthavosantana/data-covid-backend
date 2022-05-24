import debug, { IDebugger } from "debug";
import VacinaFilters from "../../common/types/VacinaFilters";
import { Vacinas } from "../models/vacina.model";
import { IVacinaService } from "../ports/vacina.service.interface";
import { UseCase } from '../../common/ports/usecase';

const log: IDebugger = debug('app:FindDadosPorRegiaoUseCase');

export class FindDadosPorRegiaoUseCase implements UseCase {
  
  private readonly service: IVacinaService;

  constructor(service: IVacinaService) {
    this.service = service;
  }

  execute(params: VacinaFilters): Promise<Vacinas[]> {
    return this.service.findDadosPorRegiao(params);
  }
}