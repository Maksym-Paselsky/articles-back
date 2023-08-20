import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface FilterParams {
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
