import { Injectable, NotFoundException } from '@nestjs/common';
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

    async getOne(cedula: number){
        const data =  await this.otroRepository.findOne({
            where: {
                cedula
            }
        })
        if (!data)
            throw new NotFoundException('Post does not exist or unauthorized');
        return data;
    }

    async createOne(dto: CreateOtrosDto){
        const otro = this.otroRepository.create(dto as any);
        console.log(otro);
        return await this.otroRepository.save(otro);
    }

    async editOne(id: number, dto: EditOtrosDto){
        const otro = await this.getOne(id);
        const editOtro = Object.assign(otro, dto); 
        return await this.otroRepository.save(editOtro);
    }

    async deleteOne(id: number){
        const otro = await this.getOne(id);
        return await this.otroRepository.remove(otro);
    }
}
