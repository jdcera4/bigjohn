import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
  } from 'typeorm';

  import {Empleado} from 'src/empleados/entities/empleados.entity';

@Entity('clockInit')
export class ClockInit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cedula!: number;

    @CreateDateColumn({ name: 'clock', type: 'timestamp' })
    clock: Date;

    @ManyToOne(() => Empleado, empleado => empleado.clockInit)
    author: Empleado
}