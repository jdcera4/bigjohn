import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateEmpleadoDto } from './dtos/create-empleados.dto';

@Controller('empleados')
export class EmpleadosController {
    @Get()
    getMany(){
        return {message: 'Ok'};
    }

    @Get(':id')
    getById (@Param('id') id:number){
        return {id: id}
    }

    @Post()
    createEmpleado(@Body() dto: CreateEmpleadoDto){
        return dto;
    }
}
