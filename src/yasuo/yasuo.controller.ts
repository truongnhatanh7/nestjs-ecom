import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateYasuoDto } from './dto/create-yasuo.dto';
import { YasuoService } from './yasuo.service';
import { IYasuo } from './interfaces/yasuo.interface';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { Reflector } from '@nestjs/core';
import { LoggingInterceptor } from './logging.interceptor';

@Controller('yasuo')
@UseGuards(new RolesGuard(new Reflector()))
@UseInterceptors(LoggingInterceptor)
export class YasuoController {
  constructor(private yasuosService: YasuoService) {}

  @Get('find')
  async findAll(): Promise<IYasuo[]> {
    return this.yasuosService.findAll();
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Post('create')
  @Roles('admin')
  async create(@Body() createYasuoDto: CreateYasuoDto) {
    this.yasuosService.create(createYasuoDto);
  }
}
