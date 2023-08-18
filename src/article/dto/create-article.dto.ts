import { IsDate, IsOptional, IsString, IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
export class CreateArticleDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  author: string;
  @IsString()
  @ApiProperty()
  title: string;
  @IsString()
  // TODO: enable after frotnend validation will be implemented
  // @MinLength(50)
  @ApiProperty()
  description: string;
  @IsString()
  @IsUrl()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  url: string;
  @IsString()
  @ApiProperty()
  source: string;
  @IsString()
  @IsUrl()
  @ApiProperty()
  image: string;
  @IsString()
  @ApiProperty()
  category: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  language: string;
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  country: string;
  @IsDate()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  @Transform(({ value }) => new Date(value))
  published_at?: Date = new Date();
}
