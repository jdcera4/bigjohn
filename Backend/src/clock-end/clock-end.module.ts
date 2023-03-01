import { Module } from '@nestjs/common';
import { ClockEndService } from './clock-end.service';
import { ClockEndController } from './clock-end.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClockEnd } from './entities/clockEnd.entity';
import { EmpleadosModule } from 'src/empleados/empleados.module';

@Module({
    // Importacion Entity con creacion y configuracion typeorm
    imports:[
      TypeOrmModule.forFeature([ ClockEnd]),
      EmpleadosModule
    ],
  providers: [ClockEndService],
  controllers: [ClockEndController]
})
export class ClockEndModule {}
