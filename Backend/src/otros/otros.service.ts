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

    async getMany(): Promise<Otro[]>{
        return await this.otroRepository.find()
    }

    getOne(id: number){
        return {Ok: 'getOne'}
    }

    createOne(dto: CreateOtrosDto){
        return {ok: 'createOne'}
    }

    editOne(id: number, dto: EditOtrosDto){
        return {Ok: 'editOne'}
    }

    deleteOne(id: number){
        return {Ok: 'deleteOne'}
    }
}
