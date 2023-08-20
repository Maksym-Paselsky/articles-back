import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {
  @Prop()
  author: string;
  @Prop({ type: String, text: true })
  title: string;
  @Prop({ type: String, text: true })
  description: string;
  @Prop()
  url: string;
  @Prop({ type: String, text: true })
  source: string;
  @Prop()
  image: string;
  @Prop({ type: String, text: true })
  category: string;
  @Prop()
  language: string;
  @Prop()
  country: string;
  @Prop()
  published_at: Date;
  @Prop({ default: false })
  visible: boolean;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
