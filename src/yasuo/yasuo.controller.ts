import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateYasuoDto } from './dto/create-yasuo.dto';
import { YasuoService } from './yasuo.service';
import { IYasuo } from './interfaces/yasuo.interface';

@Controller('yasuo')
export class YasuoController {
  constructor(private yasuosService: YasuoService) {}

  @Get('find')
  async findAll(): Promise<IYasuo[]> {
    return this.yasuosService.findAll();
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Post('create')
  async create(@Body() createYasuoDto: CreateYasuoDto) {
    this.yasuosService.create(createYasuoDto);
  }
}
