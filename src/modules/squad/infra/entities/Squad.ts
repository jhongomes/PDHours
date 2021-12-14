import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid'
import { Employee } from "../../../employee/infra/entities/Employee";

@Entity('squad')
class Squad {
    @PrimaryColumn()
    id: string;

    @Column({
        unique: true
    })
    name: string;

    @OneToMany(() => Employee, employee => employee.squadID)
    employeeId: Employee;

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

export { Squad }