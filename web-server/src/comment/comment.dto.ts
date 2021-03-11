import { IsInt, IsString, IsDefined } from 'class-validator';

export class CommentDto {
    @IsInt()
    @IsDefined()
    postId: number;

    @IsString()
    @IsDefined()
    content: string;
}
