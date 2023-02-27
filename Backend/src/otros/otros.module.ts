import { Module } from '@nestjs/common';
import { Otro } from './entities/otros.entity';
import { OtrosController } from './otros.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { OtrosService } from './otros.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Otro])
  ],
  controllers: [OtrosController],
  providers: [OtrosService]
})
export class OtrosModule {}
