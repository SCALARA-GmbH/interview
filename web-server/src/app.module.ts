import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';

@Module({
  imports: [
    PostModule,
    CommentModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () => getConnectionOptions(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
