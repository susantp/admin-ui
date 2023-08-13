"use server"

import { fetchAllScreensService } from "@/modules/screen-management/data/screen-services"
import { Screen } from "@/modules/screen-management/domain/types"

import { DataResponse } from "@/components/data-table/data-response"

export const fetchAllScreensAction = async (
  screenId: string
): Promise<DataResponse<Screen>> => fetchAllScreensService(screenId)
