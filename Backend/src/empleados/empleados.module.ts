import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { EmpleadosController } from './empleados.controller';
import { EmpleadosService } from './empleados.service';
import { Empleado } from './entities/empleados.entity';

@Module({
  // Importacion Entity con creacion y configuracion typeorm
  imports:[
    TypeOrmModule.forFeature([Empleado])
  ],
  controllers: [EmpleadosController],
  providers: [EmpleadosService],
  exports: [EmpleadosService]
})
export class EmpleadosModule {}
