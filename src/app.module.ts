import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksService } from './cron/tasks.service';
import { HttpModule } from '@nestjs/axios';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 3,
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ScheduleModule.forRoot(),
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService, TasksService],
})
export class AppModule {}
