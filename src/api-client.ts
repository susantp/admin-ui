export interface ApiResponse<T> {
  message: string
  status: number
  data: T | null
  error: string | null
}

export class ApiClient {
  private static readonly baseUrl: string =
    process.env.API_BASE_URL ?? "http://localhost:8000"

  private static async request<T>(
    path: string,
    method: string,
    body?: Record<string, unknown>
  ): Promise<ApiResponse<T>> {
    const response: Response = await fetch(`${ApiClient.baseUrl}${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    const apiResponse: ApiResponse<T> =
      (await response.json()) as ApiResponse<T>

    if (apiResponse.error) {
      throw new Error(apiResponse.error)
    }

    return apiResponse
  }

  public static async get<T>(path: string): Promise<ApiResponse<T>> {
    return ApiClient.request<T>(path, "GET")
  }

  public static async post<T>(
    path: string,
    body: Record<string, unknown>
  ): Promise<ApiResponse<T>> {
    return ApiClient.request<T>(path, "POST", body)
  }

  public static async put<T>(
    path: string,
    body: Record<string, unknown>
  ): Promise<ApiResponse<T>> {
    return ApiClient.request<T>(path, "PUT", body)
  }

  public static async delete<T>(path: string): Promise<ApiResponse<T>> {
    return ApiClient.request<T>(path, "DELETE")
  }
}
