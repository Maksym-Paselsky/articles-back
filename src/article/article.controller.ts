import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

import { Public } from 'src/auth/auth.decorator';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PaginationParams, UsePagination } from 'src/decorators/usePagination';
import { SearchParams, UseSearch } from 'src/decorators/useSearch';
import { FilterParams, UseFilter } from 'src/decorators/useFilter';

@ApiTags('Artcile')
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Public()
  @Get()
  @ApiQuery({ name: 'search', type: SearchParams })
  @ApiQuery({ name: 'pagination', type: PaginationParams })
  @ApiQuery({ name: 'filters', type: FilterParams })
  findAll(
    @UseSearch() search: SearchParams,
    @UsePagination() pagination: PaginationParams,
    @UseFilter() filters: FilterParams,
  ) {
    return this.articleService.findAll(search, pagination, filters);
  }

  @Public()
  @Get('categories')
  findCategories() {
    return this.articleService.findCategories();
  }

  @ApiBearerAuth()
  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(id, updateArticleDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(id);
  }
}
