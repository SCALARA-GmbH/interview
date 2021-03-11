import {
    Body,
    Controller,
    Get,
    Query,
    Post as HttpPost,
    ValidationPipe,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import { Repository, TreeRepository } from 'typeorm';
import { Comment } from './comment.entity';
import { CommentDto } from './comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post/post.entity';

@Controller('comments')
export class CommentController {
    constructor(
        @InjectRepository(Comment) private readonly commentRepository: TreeRepository<Comment>,
        @InjectRepository(Post) private readonly postRepository: Repository<Post>

    ) { }

    @HttpPost()
    async create(
        @Body(
            new ValidationPipe({
                whitelist: true,
                transform: true,
            }),
        )
        data: CommentDto,
    ): Promise<Comment> {
        const post: Post = await this.postRepository.findOne(data.postId);

        if (post === undefined) {
            throw new HttpException('Incorrect postId submitted.', HttpStatus.BAD_REQUEST);
        }

        return this.commentRepository.save({ content: data.content, post: post });

    }

    @Get()
    async findAllCommentsOfPost(@Query('post-id') postId: number): Promise<Comment[]> {
        return this.commentRepository.createQueryBuilder("comment").where("comment.postId = :postId", { postId: postId }).getMany();
    }
}
