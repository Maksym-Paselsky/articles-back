interface PaginationResult<T> {
  data: T[];
  total: number;
  offset: number;
}
