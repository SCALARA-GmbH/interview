import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { Post } from './post.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('PostController', () => {
  let controller: PostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [
        {
          provide: getRepositoryToken(Post),
          useClass: Repository,
        }
      ]

    }).compile();

    controller = module.get<PostController>(PostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
