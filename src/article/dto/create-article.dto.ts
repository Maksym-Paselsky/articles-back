import { IsDate, IsString, IsUrl, MinLength } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  author: string;
  @IsString()
  title: string;
  @IsString()
  @MinLength(50)
  description: string;
  @IsString()
  @IsUrl()
  url: string;
  @IsString()
  source: string;
  @IsString()
  @IsUrl()
  image: string;
  @IsString()
  category: string;
  @IsString()
  language: string;
  @IsString()
  country: string;
  @IsString()
  @IsDate()
  published_at: string;
}
