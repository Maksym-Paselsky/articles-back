import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface SearchParams {
  search: string;
}

export const UseSearch = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): SearchParams => {
    const request = ctx.switchToHttp().getRequest();
    const search = request.query.s || '';
    return { search };
  },
);
