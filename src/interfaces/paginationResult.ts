interface PaginationResult<T> {
  data: T[];
  total: number;
  limit: number;
  offset: number;
}
