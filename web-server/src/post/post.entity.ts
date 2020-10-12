import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @CreateDateColumn()
  readonly date: Date;

  @Column({ nullable: false })
  content: string;
}
