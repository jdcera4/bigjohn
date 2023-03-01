import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { CreateEmpleadoDto } from './dtos/createEmpleados.dto';
import { EmpleadosService } from './empleados.service';

@Controller('empleados')
export class EmpleadosController {

    constructor(private readonly empleadosService: EmpleadosService){}

    @Get()
    getMany(){ 
        return this.empleadosService.getMany();
    }

    @Get(':cedula')
    getById (@Param('cedula', ParseIntPipe) cedula:number){
        const data = this.empleadosService.getOne(cedula);
        return data
    }

    @Post()
    createEmpleado(@Body() dto: CreateEmpleadoDto){
        return this.empleadosService.createOne(dto);
    }
}
