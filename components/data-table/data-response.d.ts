export interface DataResponse<TData> {
  total: number
  total_page: number
  results: TData[]
}

export interface DataQuery {
  pageSize: number
  pageIndex: number
  globalFilter: string
}
