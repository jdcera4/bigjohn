import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/empleados.entity';
import { Repository } from 'typeorm';
import { CreateEmpleadoDto } from './dtos/createEmpleados.dto';

@Injectable()
export class EmpleadosService {

    constructor(
        @InjectRepository(Empleado)
        private readonly empleadoRepository: Repository<Empleado>
    ){}

    async getMany(){
        const data = await this.empleadoRepository.find();
        return data;
    }

    async getOne(cedula: number){
        const empleado = await this.empleadoRepository.findOne({
            where: {
                cedula
            }
        });

        if(!empleado){
            return new HttpException('worker not exists', 404);
        }


        return empleado;
    }

    async createOne(dto: CreateEmpleadoDto){
        const empleadoFound = await this.empleadoRepository.findOne({
            where: {
                cedula: dto.cedula
            }
        })
        if(empleadoFound){
            return new HttpException(' Worker already exists', 400)
        }
        const empleado = this.empleadoRepository.create(dto as any);
        return this.empleadoRepository.save(empleado);
    }
}
