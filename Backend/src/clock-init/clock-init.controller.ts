import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClockInitService } from './clock-init.service';
import { CreateClockInitDto } from './dtos/createClockInit.dto';

@Controller('clock-init')
export class ClockInitController {

    constructor(private readonly clockInitService: ClockInitService){}

    @Post()
    createClockInit(@Body() dto: CreateClockInitDto){
        return this.clockInitService.createExit(dto);
    }

    @Get()
    getClockInit(){
        return this.clockInitService.getInit();
    }

}
