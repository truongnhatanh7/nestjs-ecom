import { IYasuo } from '../interfaces/yasuo.interface';
import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateYasuoDto implements IYasuo {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsInt()
  age: number;

  @IsInt()
  kda = 0;
}
