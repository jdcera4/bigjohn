import {
    IsString,
    IsNumber,   
  } from 'class-validator';

export class CreateOtrosDto {
    @IsNumber()
    cedula: number;
    @IsString()
    name: string;
    @IsNumber()
    type: number;

}