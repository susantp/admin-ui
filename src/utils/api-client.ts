interface ApiResponse {
  message: string
  data: unknown | null
  status: number
  error: string | null
}

export default class ApiClient<T> {
  private static readonly baseUrl: string =
    process.env.BACKEND_BASE_URL ?? "http://localhost:8000/"

  public static async get<T>(
    endpoint: string,
    headers?: HeadersInit
  ): Promise<T> {
    const response: Response = await fetch(`${this.baseUrl}/${endpoint}`, {
      headers,
    })
    if (!response.ok) {
      throw new Error(
        `Error fetching data from API: ${response.status} ${response.statusText}`
      )
    }
    const apiResponse: ApiResponse = (await response.json()) as ApiResponse

    if (apiResponse.error) {
      throw new Error(apiResponse.error)
    }

    return apiResponse.data as Promise<T>
  }

  public static async post<T>(
    endpoint: string,
    data: T,
    headers?: { string: string }
  ): Promise<T> {
    const response: Response = await fetch(`${this.baseUrl}/${endpoint}`, {
      method: "POST",
      headers: headers ?? {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const apiResponse: ApiResponse = (await response.json()) as ApiResponse

    if (apiResponse.error) {
      throw new Error(apiResponse.error)
    }

    return apiResponse.data as Promise<T>
  }

  public static async put<T>(endpoint: string, data: T): Promise<T> {
    const response: Response = await fetch(`${this.baseUrl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      throw new Error(
        `Error updating data in API: ${response.status} ${response.statusText}`
      )
    }
    const apiResponse: ApiResponse = (await response.json()) as ApiResponse

    if (apiResponse.error) {
      throw new Error(apiResponse.error)
    }

    return apiResponse.data as Promise<T>
  }

  public static async delete(endpoint: string): Promise<void> {
    const response: Response = await fetch(`${this.baseUrl}/${endpoint}`, {
      method: "DELETE",
    })
    if (!response.ok) {
      throw new Error(
        `Error deleting data from API: ${response.status} ${response.statusText}`
      )
    }
  }
}
