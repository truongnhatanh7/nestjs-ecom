import { Injectable } from '@nestjs/common';
import { IYasuo } from './interfaces/yasuo.interface';

@Injectable()
export class YasuoService {
  private readonly yasuos: IYasuo[] = [];

  create(yasuo: IYasuo) {
    this.yasuos.push(yasuo);
  }

  findAll(): IYasuo[] {
    return this.yasuos;
  }
}
