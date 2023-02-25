import { Module } from '@nestjs/common';
import { OtrosController } from './otros.controller';

@Module({
  controllers: [OtrosController]
})
export class OtrosModule {}
