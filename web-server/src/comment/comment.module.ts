import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { Post } from '../post/post.entity';

const entities = TypeOrmModule.forFeature([Comment, Post]);

@Module({
    imports: [entities],
    controllers: [CommentController],
})
export class CommentModule { }
