import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOtrosDto } from './dtos/createOtros.dto';
import { EditOtrosDto } from './dtos/editOtros.dto';
import { Repository } from 'typeorm';
import { Otro } from './entities/otros.entity';

@Injectable()
export class OtrosService {

    constructor(
        @InjectRepository(Otro)
        private readonly otroRepository: Repository<Otro>
    ){}

    async getMany() {
        const data =  await this.otroRepository.find()
        return {
            message: 'Ok',
            data
        }
    }

    getOne(id: number){
        return {Ok: 'getOne'}
    }

    async createOne(dto: CreateOtrosDto){
        const otro = this.otroRepository.create(dto as any);
        return await this.otroRepository.save(otro);
    }

    editOne(id: number, dto: EditOtrosDto){
        return {Ok: 'editOne'}
    }

    deleteOne(id: number){
        return {Ok: 'deleteOne'}
    }
}
