import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1602510292133 implements MigrationInterface {
    name = 'initial1602510292133'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `post` (`id` int NOT NULL AUTO_INCREMENT, `date` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `content` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `post`");
    }

}
