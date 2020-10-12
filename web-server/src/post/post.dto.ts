import { IsString, IsDefined } from 'class-validator';

export class PostDto {
  @IsString()
  @IsDefined()
  content: string;
}
