import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateYasuoDto } from './create-yasuo.dto';
import { YasuoService } from './yasuo.service';
import { IYasuo } from './interfaces/yasuo.interface';

@Controller('yasuo')
export class YasuoController {
  constructor(private yasuosService: YasuoService) {}

  @Get('find')
  async findAll(): Promise<IYasuo[]> {
    return this.yasuosService.findAll();
  }

  @Post('create')
  async create(@Body() createYasuoDto: CreateYasuoDto) {
    this.yasuosService.create(createYasuoDto);
  }
}
