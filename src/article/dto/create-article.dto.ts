import { IsDate, IsString, IsUrl, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
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
  @IsDate()
  @Transform(({ value }) => new Date(value))
  published_at: Date;
}
