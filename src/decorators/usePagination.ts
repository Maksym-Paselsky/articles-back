import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface PaginationParams {
  limit: number;
  offset: number;
}

export const UsePagination = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): PaginationParams => {
    const request = ctx.switchToHttp().getRequest();
    const limit = Number(request.query.limit) || 10;
    const offset = Number(request.query.offset) || 0;
    return { limit, offset };
  },
);
