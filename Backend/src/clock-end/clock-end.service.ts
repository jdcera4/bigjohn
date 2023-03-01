import { Injectable, HttpException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { EmpleadosService } from 'src/empleados/empleados.service';
import {Repository} from 'typeorm';
import { CreateClockEndDto } from './dto/CreateClockEnd.dto';
import { ClockEnd } from './entities/clockEnd.entity';

@Injectable()
export class ClockEndService {

    constructor(
        @InjectRepository(ClockEnd) 
        private clockEndRepository: Repository<ClockEnd>,
        private empleadosService: EmpleadosService
    ){}

    async createExit(clock: CreateClockEndDto){
        const empleadoFound = await this.empleadosService.getOne(clock.cedula);

        if(!empleadoFound){
            return new HttpException('Worker not found', 404)
        }

        const newClock = this.clockEndRepository.create(clock);
        return this.clockEndRepository.save(newClock);
    }

    getExit(){
        return this.clockEndRepository.find();
    }
}
