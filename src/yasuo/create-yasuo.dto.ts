import { IYasuo } from './interfaces/yasuo.interface';

export class CreateYasuoDto implements IYasuo {
  name: string;
  age: number;
  kda = 0;
}
