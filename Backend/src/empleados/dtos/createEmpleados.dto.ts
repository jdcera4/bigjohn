import {
    IsString,
    IsNumber,   
  } from 'class-validator';

export class CreateEmpleadoDto {
    @IsNumber()
    cedula: number;
    @IsString()
    name: string;
    @IsNumber()
    role: number;
}