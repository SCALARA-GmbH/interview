import { Comment } from '../comment/comment.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @CreateDateColumn()
  readonly date: Date;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  content: string;

  @OneToMany(type => Comment, comment => comment.post)
  comments: Comment[];
}
