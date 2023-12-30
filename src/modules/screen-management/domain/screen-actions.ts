"use server"

import { screenDatasource } from "@/screens/data/screen-datasource"
import { Screen } from "@/screens/domain/types"

import { DataResponse } from "@/components/data-table/data-response"

export const fetchAllScreensAction = async (): Promise<DataResponse<Screen>> =>
  screenDatasource.fetchAllScreens()
