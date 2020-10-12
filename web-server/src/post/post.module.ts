import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';

const entities = TypeOrmModule.forFeature([Post]);

@Module({
  imports: [entities],
  controllers: [PostController],
})
export class PostModule {}
