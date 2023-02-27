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

    @Get(':id')
    getById (@Param('id') id:number){
        return this.otrosService.getOne(id);
    }

    @Post()
    createEmpleado(@Body() dto: CreateOtrosDto){
        return this.otrosService.createOne(dto);
    }

    @Put(':id')
    editOne(
        @Param('id') id: number,
        @Body() dto: EditOtrosDto
        ) {
            return this.otrosService.editOne(id, dto);
        }

    @Delete(':id')
    delteOne(@Param('id') id: number){
        return {message: 'deleted'}
    }
}
