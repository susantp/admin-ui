export interface DataResponse<TData> {
  total: number
  total_page: number
  results: TData[]
}
