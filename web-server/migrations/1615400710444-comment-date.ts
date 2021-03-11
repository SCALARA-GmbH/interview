import {MigrationInterface, QueryRunner} from "typeorm";

export class commentDate1615400710444 implements MigrationInterface {
    name = 'commentDate1615400710444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `comment` ADD `date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `comment` DROP COLUMN `date`");
    }

}
