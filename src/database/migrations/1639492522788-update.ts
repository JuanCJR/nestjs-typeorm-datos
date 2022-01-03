import {MigrationInterface, QueryRunner} from "typeorm";

export class update1639492522788 implements MigrationInterface {
    name = 'update1639492522788'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "date"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ADD "date" date NOT NULL`);
    }

}
