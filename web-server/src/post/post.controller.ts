import {
  Body,
  Controller,
  Get,
  Post as HttpPost,
  ValidationPipe,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { PostDto } from './post.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('posts')
export class PostController {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) {}

  @HttpPost()
  async create(
    @Body(
      new ValidationPipe({
        whitelist: true,
        transform: true,
      }),
    )
    data: PostDto,
  ): Promise<Post> {
    return this.postRepository.save({ content: data.content });
  }

  @Get()
  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }
}
