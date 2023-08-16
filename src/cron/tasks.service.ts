import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  constructor(private readonly httpService: HttpService) {}

  private readonly logger = new Logger(TasksService.name);

  @Cron(CronExpression.EVERY_5_SECONDS)
  importArticles() {
    this.logger.debug('Importing articles');
    this.httpService.axiosRef
      .get(
        `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&country=ua&keywords=ukraine russia war`,
      )
      .then((res) => {
        console.log(res.data);
      });
  }
}
