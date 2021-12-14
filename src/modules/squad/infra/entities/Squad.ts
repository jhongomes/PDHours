import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid'

@Entity('squad')
class Squad {
    @PrimaryColumn()
    id: string;

    @Column({
        unique: true
    })
    name: string;

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