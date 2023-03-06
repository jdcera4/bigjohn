import {
    IsNumber,   
  } from 'class-validator';

export class CreateClockInitDto {
    @IsNumber()
    cedula: number;
}