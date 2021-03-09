import {MigrationInterface, QueryRunner} from "typeorm";

export class comment1615327846622 implements MigrationInterface {
    name = 'comment1615327846622'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `comment` (`id` int NOT NULL AUTO_INCREMENT, `content` varchar(255) NOT NULL, `postId` int NULL, `parentId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `comment_closure` (`id_ancestor` int NOT NULL, `id_descendant` int NOT NULL, INDEX `IDX_cbfcbcc9274de7f5608b8ae23d` (`id_ancestor`), INDEX `IDX_aa8fb74dcdb101a8d80cb2256d` (`id_descendant`), PRIMARY KEY (`id_ancestor`, `id_descendant`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `comment` ADD CONSTRAINT `FK_94a85bb16d24033a2afdd5df060` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `comment` ADD CONSTRAINT `FK_e3aebe2bd1c53467a07109be596` FOREIGN KEY (`parentId`) REFERENCES `comment`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `comment_closure` ADD CONSTRAINT `FK_cbfcbcc9274de7f5608b8ae23d9` FOREIGN KEY (`id_ancestor`) REFERENCES `comment`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `comment_closure` ADD CONSTRAINT `FK_aa8fb74dcdb101a8d80cb2256de` FOREIGN KEY (`id_descendant`) REFERENCES `comment`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `comment_closure` DROP FOREIGN KEY `FK_aa8fb74dcdb101a8d80cb2256de`");
        await queryRunner.query("ALTER TABLE `comment_closure` DROP FOREIGN KEY `FK_cbfcbcc9274de7f5608b8ae23d9`");
        await queryRunner.query("ALTER TABLE `comment` DROP FOREIGN KEY `FK_e3aebe2bd1c53467a07109be596`");
        await queryRunner.query("ALTER TABLE `comment` DROP FOREIGN KEY `FK_94a85bb16d24033a2afdd5df060`");
        await queryRunner.query("DROP INDEX `IDX_aa8fb74dcdb101a8d80cb2256d` ON `comment_closure`");
        await queryRunner.query("DROP INDEX `IDX_cbfcbcc9274de7f5608b8ae23d` ON `comment_closure`");
        await queryRunner.query("DROP TABLE `comment_closure`");
        await queryRunner.query("DROP TABLE `comment`");
    }

}
