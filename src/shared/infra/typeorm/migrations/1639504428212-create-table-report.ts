import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableReport1639504428212 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'report',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'description',
                        type: 'text',
                    },
                    {
                        name: 'employeeId',
                        type: 'uuid',
                    },
                    {
                        name: 'spentHours',
                        type: 'integer',
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKEmployee',
                        referencedTableName: 'employee',
                        referencedColumnNames: ['id'],
                        columnNames: ['employeeId'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('report')
    }

}
