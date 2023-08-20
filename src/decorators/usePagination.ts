import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationParams {
  @ApiProperty({ required: false })
  limit: number;
  @ApiProperty({ required: false })
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
