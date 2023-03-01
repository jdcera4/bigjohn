import { Module } from '@nestjs/common';
import { ClockInitService } from './clock-init.service';
import { ClockInitController } from './clock-init.controller';

@Module({
  providers: [ClockInitService],
  controllers: [ClockInitController]
})
export class ClockInitModule {}
