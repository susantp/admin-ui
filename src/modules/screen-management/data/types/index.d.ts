import { Screen } from "@/screen-management/domain/types"

import { DataResponse } from "@/components/data-table/data-response"

interface ScreenDatasource {
  fetchAllScreens: () => Promise<DataResponse<Screen>>
}
