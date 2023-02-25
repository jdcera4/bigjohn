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

@Controller('otros')
export class OtrosController {
    @Get()
    getMany(){
        return {message: 'Ok'};
    }

    @Get(':id')
    getById (@Param('id') id:number){
        return {id: id}
    }

    @Post()
    createEmpleado(@Body() dto: CreateOtrosDto){
        return dto;
    }

    @Put()
    editOne(
        @Param('id') id: number,
        @Body() dto: EditOtrosDto
        ) {
            return dto;
        }

    @Delete(':id')
    delteOne(@Param('id') id: number){
        return {message: 'deleted'}
    }
}
