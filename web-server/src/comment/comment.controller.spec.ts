import { Test, TestingModule } from '@nestjs/testing';
import { CommentController } from './comment.controller';
import { Post } from '../post/post.entity';
import { Comment } from './comment.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TreeRepository } from 'typeorm';


describe('CommentController', () => {
    let controller: CommentController;
    const findOneMock = jest.fn();

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                {
                    provide: getRepositoryToken(Post),
                    useValue: {
                        findOne: findOneMock
                    }
                },
                {
                    provide: getRepositoryToken(Comment),
                    useClass: TreeRepository
                }
            ],
            controllers: [CommentController],
        }).compile();

        controller = module.get<CommentController>(CommentController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });


    test('should return incorrect-postId message if no post found for', async () => {
        findOneMock.mockReturnValue(undefined);
        await expect(controller.create({ postId: -1, content: "Test" })).rejects.toThrow('Incorrect postId submitted.');

    });

});
