import { Screen } from "@/screens/domain/types"

import { DataResponse } from "@/components/data-table/data-response"

interface ScreenDatasource {
  fetchAllScreens: () => Promise<DataResponse<Screen>>
}
