import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './entities/article.entity';
import { Logger } from '@nestjs/common';
@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article') private readonly articleModel: Model<Article>,
  ) {}

  private readonly logger = new Logger(ArticleService.name);

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(createArticleDto);
    return await createdArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return await this.articleModel.find().exec();
  }

  async findOne(id: string) {
    try {
      return await this.articleModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find article.');
    }
  }

  async update(id: string, updateArticleDto: UpdateArticleDto) {
    try {
      return await this.articleModel
        .findByIdAndUpdate(id, updateArticleDto, { new: true })
        .exec();
    } catch (error) {
      this.logger.error(error);
      throw new NotFoundException('Could not update the article.');
    }
  }

  async remove(id: string) {
    return await this.articleModel.findByIdAndRemove(id).exec();
  }
}
