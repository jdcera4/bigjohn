import { Module } from '@nestjs/common';
import { EmpleadosController } from './empleados.controller';

@Module({
  controllers: [EmpleadosController]
})
export class EmpleadosModule {}
