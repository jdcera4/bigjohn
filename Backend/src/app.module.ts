import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadosModule } from './empleados/empleados.module';
import { OtrosModule } from './otros/otros.module';
import { ClockInitModule } from './clock-init/clock-init.module';
import { ClockEndModule } from './clock-end/clock-end.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Karibik.2022',
      database: 'bigjohn6',
      entities: [join(__dirname, '../**/**/*entity{.ts,.js}')],
      migrations: ['./migrations/*.js'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    EmpleadosModule, 
    OtrosModule, 
    ClockInitModule,
    ClockEndModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
