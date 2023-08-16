import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {
  @Prop()
  author: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  url: string;
  @Prop()
  source: string;
  @Prop()
  image: string;
  @Prop()
  category: string;
  @Prop()
  language: string;
  @Prop()
  country: string;
  @Prop()
  published_at: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
