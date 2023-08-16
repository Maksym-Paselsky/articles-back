import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { HttpModule } from '@nestjs/axios';
import { Article } from 'src/article/entities/article.entity';
import { ArticleModule } from 'src/article/article.module';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ArticleModule,
  ],
  controllers: [],
  providers: [TasksService],
})
export class CronModule {}
