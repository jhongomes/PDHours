import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid'
import { Squad } from "../../../squad/infra/entities/Squad";

@Entity('employee')
class Employee {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    estimatedHours: Number;

    @JoinColumn({ name: 'squadId' })
    @OneToOne(() => Squad, { eager: true })
    squadID: Squad

    @Column()
    squadId: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}

export { Employee }
