import { Post } from '../post/post.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Tree,
    ManyToOne,
    TreeChildren,
    TreeParent
} from 'typeorm';

@Entity()
@Tree("closure-table")
export class Comment {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @CreateDateColumn()
    readonly date: Date;

    @Column({ nullable: false })
    content: string;

    @ManyToOne(type => Post, post => post.comments)
    post: Post;

    @TreeChildren()
    children: Comment[];

    @TreeParent()
    parent: Comment;


}
