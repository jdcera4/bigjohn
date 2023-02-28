import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
    UpdateDateColumn,
  } from 'typeorm';

@Entity('otros')
export class Otro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    cedula: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'int' })
    tipo: number;

    @CreateDateColumn({ name: 'Hingreso', type: 'timestamp' })
    Hingreso: Date;

    @CreateDateColumn({ name: 'Hsalida', type: 'timestamp' })
    Hsalida: Date;

}