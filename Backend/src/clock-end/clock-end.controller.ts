import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClockEndService } from './clock-end.service';
import { CreateClockEndDto } from './dto/CreateClockEnd.dto';

@Controller('clock-end')
export class ClockEndController {

    constructor(private readonly clockEndService: ClockEndService){}

    @Post()
    createClockEnd(@Body() dto: CreateClockEndDto){
        return this.clockEndService.createExit(dto);
    }

    @Get()
    getClockEnd(){
        return this.clockEndService.getExit();
    }
}
