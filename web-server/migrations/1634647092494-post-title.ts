import {MigrationInterface, QueryRunner} from "typeorm";

export class postTitle1634647092494 implements MigrationInterface {
    name = 'postTitle1634647092494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `post` ADD `title` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `post` DROP COLUMN `title`");
    }

}
