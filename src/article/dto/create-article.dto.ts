import {
  IsDate,
  IsOptional,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateArticleDto {
  @IsString()
  @IsOptional()
  author: string;
  @IsString()
  title: string;
  @IsString()
  @MinLength(50)
  description: string;
  @IsString()
  @IsUrl()
  @IsOptional()
  url: string;
  @IsString()
  source: string;
  @IsString()
  @IsUrl()
  image: string;
  @IsString()
  category: string;
  @IsString()
  @IsOptional()
  language: string;
  @IsString()
  @IsOptional()
  country: string;
  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  published_at: Date;
}
