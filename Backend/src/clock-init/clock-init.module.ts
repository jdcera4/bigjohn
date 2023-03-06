import { Module } from '@nestjs/common';
import { ClockInitService } from './clock-init.service';
import { ClockInitController } from './clock-init.controller';
import { ClockInit } from './entities/clockInit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadosModule } from 'src/empleados/empleados.module';

@Module({
  // Importacion Entity con creacion y configuracion typeorm
  imports:[
    TypeOrmModule.forFeature([ ClockInit ]),
    EmpleadosModule
  ],
  providers: [ClockInitService],
  controllers: [ClockInitController]
})
export class ClockInitModule {}
