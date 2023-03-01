import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany
  } from 'typeorm';

  import {ClockEnd} from 'src/clock-end/entities/clockEnd.entity';

@Entity('empleados')
export class Empleado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: true})
    cedula!: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    name!: string;

    @Column({ type: 'int', nullable: true })
    role!: number;

    @CreateDateColumn({ name: 'clockInit', type: 'timestamp' })
    clockInit: Date;

    @CreateDateColumn({ name: 'clockEnd', type: 'timestamp' })
    clockEnd: Date;

    @OneToMany(() => ClockEnd, clockEnd => clockEnd.cedula)
    clocks: ClockEnd[]

}