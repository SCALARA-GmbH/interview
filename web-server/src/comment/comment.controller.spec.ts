import { Test, TestingModule } from '@nestjs/testing';
import { CommentController } from './comment.controller';
import { Post } from '../post/post.entity';
import { Comment } from './comment.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository, TreeRepository } from 'typeorm';

describe('CommentController', () => {
    let controller: CommentController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                {
                    provide: getRepositoryToken(Post),
                    useClass: Repository,
                },
                {
                    provide: getRepositoryToken(Comment),
                    useClass: TreeRepository,
                }
            ],
            controllers: [CommentController],
        }).compile();

        controller = module.get<CommentController>(CommentController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
