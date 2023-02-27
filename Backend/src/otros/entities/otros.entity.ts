import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
    UpdateDateColumn
  } from 'typeorm';

@Entity('otros')
export class Otro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: false })
    name: string;

    @CreateDateColumn({ name: 'Hingreso', type: 'timestamp' })
    Hingreso: Date;

    @CreateDateColumn({ name: 'Hsalida', type: 'timestamp' })
    Hsalida: Date;

}