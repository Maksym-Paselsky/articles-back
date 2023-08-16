import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { HttpModule } from '@nestjs/axios';
import { Article, ArticleSchema } from 'src/article/entities/article.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  controllers: [],
  providers: [TasksService],
})
export class CronModule {}
