import { ArticleService } from './../article/article.service';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { Article } from 'src/article/entities/article.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
    private readonly httpService: HttpService,
  ) {}

  private readonly logger = new Logger(TasksService.name);

  @Cron(CronExpression.EVERY_10_HOURS)
  async importArticles() {
    this.logger.debug('Importing articles');
    await this.httpService.axiosRef
      .get(
        `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&country=ua&keywords=ukraine russia war`,
      )
      .then(async (res) => {
        const articles = res.data.data as Article[];
        try {
          await this.articleModel.insertMany(articles);
          this.logger.debug(`${articles.length} articles imported`);
        } catch (e) {
          this.logger.error(e);
        }
      });
  }
}
