import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class SearchParams {
  @ApiProperty({ required: false })
  search: string;
}

export const UseSearch = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): SearchParams => {
    const request = ctx.switchToHttp().getRequest();
    const search = request.query.s;
    return { search };
  },
);
