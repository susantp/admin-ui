"use server"

import { screenDatasource } from "@/screen-management/data/screen-datasource"
import { Screen } from "@/screen-management/domain/types"

import { DataResponse } from "@/components/data-table/data-response"

export const fetchAllScreensAction = async (): Promise<DataResponse<Screen>> =>
  screenDatasource.fetchAllScreens()
