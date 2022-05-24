import debug, { IDebugger } from "debug";
import RequestFilter from "../../common/types/RequestFilter";
import { Vacinas } from "../models/vacina.model";
import { IVacinaService } from "../ports/vacina.service.interface";
import { UseCase } from '../../common/ports/usecase';

const log: IDebugger = debug('app:FindEstoqueUseCase');

export class FindEstoqueUseCase implements UseCase {
  
  private readonly service: IVacinaService;

  constructor(service: IVacinaService) {
    this.service = service;
  }

  execute(params: RequestFilter): Promise<Vacinas[]> {
    return this.service.findEstoque(params);
  }
}