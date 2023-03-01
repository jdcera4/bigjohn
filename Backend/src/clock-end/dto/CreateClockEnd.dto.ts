import {
    IsString,
    IsNumber,   
  } from 'class-validator';

export class CreateClockEndDto {
    @IsNumber()
    cedula: number;
}