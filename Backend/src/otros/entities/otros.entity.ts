import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
  } from 'typeorm';

@Entity('otros')
export class Otro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cedula!: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name!: string;

    @Column({ type: 'int', nullable: true })
    type!: number;

    @CreateDateColumn({ name: 'clockInit', type: 'timestamp' })
    clockInit: Date;

    @CreateDateColumn({ name: 'clockEnd', type: 'timestamp' })
    clockEnd: Date;

}