import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid'
import { Employee } from "../../../employee/infra/entities/Employee";

@Entity('report')
class Report {
    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @JoinColumn({ name: 'employeeId' })
    @ManyToOne(() => Employee, { eager: true })
    employeeID: Employee;

    @Column()
    employeeId: string;

    @Column()
    spentHours: Number;

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

export { Report }