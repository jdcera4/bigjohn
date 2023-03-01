import {
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete,
    Body,
    ParseIntPipe,
  } from '@nestjs/common';
import { CreateOtrosDto } from './dtos/createOtros.dto';
import { EditOtrosDto } from './dtos/editOtros.dto';
import { OtrosService } from './otros.service';

@Controller('otros')
export class OtrosController {

    constructor(private readonly otrosService: OtrosService){}

    @Get()
    getMany(){
        return this.otrosService.getMany();
    }

    @Get(':cedula')
    async getById (@Param('cedula', ParseIntPipe) cedula:number){
        const data = this.otrosService.getOne(cedula);
        return data;
    }

    @Post()
    createEmpleado(@Body() dto: CreateOtrosDto){
        console.log(dto);
        return this.otrosService.createOne(dto);
    }

    @Put(':cedula')
    editOne(
        @Param('cedula') cedula: number,
        @Body() dto: EditOtrosDto
        ) {
            return this.otrosService.editOne(cedula, dto);
        }

    @Delete(':cedula')
    delteOne(@Param('cedula') cedula: number){
        const data = this.otrosService.deleteOne(cedula);
        return {message: 'deleted'}
    }
}
