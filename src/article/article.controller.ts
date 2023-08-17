import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Public } from 'src/auth/auth.decorator';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Public()
  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(id);
  }

  @Public()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(id, updateArticleDto);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(id);
  }
}
