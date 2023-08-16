"use server"

import {
  deleteScreenService,
  fetchAllScreensService,
  postScreenService,
  putScreenService,
} from "@/modules/screen-management/data/screen-services"
import { Screen } from "@/modules/screen-management/domain/types"
import { ScreenFormValues } from "@/modules/screen-management/presentation/components/form-config"

import { DataResponse } from "@/components/data-table/data-response"

export const fetchAllScreensAction = async (
  screenId: string
): Promise<DataResponse<Screen>> => fetchAllScreensService(screenId)

export const createScreenAction = (
  screenId: string,
  data: ScreenFormValues
): Promise<void> => postScreenService(screenId, data)

export const updateScreenAction = (
  xScreenId: string,
  screenId: string,
  data: ScreenFormValues
): Promise<void> => putScreenService(xScreenId, screenId, data)

export const deleteScreenAction = (
  xScreenId: string,
  screenId: string
): Promise<void> => deleteScreenService(xScreenId, screenId)
