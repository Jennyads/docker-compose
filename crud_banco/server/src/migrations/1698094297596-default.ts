import { MigrationInterface, QueryRunner } from "typeorm";

export class default1698094297596 implements MigrationInterface {
    name = 'default1698094297596'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`prodTitle\` varchar(25) NOT NULL, \`prodDescription\` varchar(80) NOT NULL, \`prodPrice\` varchar(10) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`product\``);
    }

}
