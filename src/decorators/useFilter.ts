import { ApiProperty } from '@nestjs/swagger';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export class FilterParams {
  @ApiProperty({
    required: false,
    description: 'Filter by category use comma separated values',
    type: String,
    example: 'category1,category2',
  })
  category: [string];
}

export const UseFilter = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): FilterParams => {
    const request = ctx.switchToHttp().getRequest();
    const category = request.query.category
      ? request.query.category.split(',')
      : [];
    return { category };
  },
);
