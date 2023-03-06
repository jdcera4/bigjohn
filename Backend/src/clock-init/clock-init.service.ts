import { Injectable, HttpException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { ClockInit } from './entities/clockInit.entity';
import {Repository} from 'typeorm';
import { EmpleadosService } from 'src/empleados/empleados.service';
import { CreateClockInitDto } from './dtos/createClockInit.dto';

@Injectable()
export class ClockInitService {

    constructor(
        @InjectRepository(ClockInit)
        private clockInitRepository: Repository<ClockInit>,
        private empleadosService: EmpleadosService
    ){}

    async createExit(clock: CreateClockInitDto){
        const empleadoFound = await this.empleadosService.getOne(clock.cedula);

        if(!empleadoFound){
            return new HttpException('Worker not found', 404)
        }

        const newClock = this.clockInitRepository.create(clock);
        return this.clockInitRepository.save(newClock);
    }

    getInit(){
        return this.clockInitRepository.find();
    }

}
