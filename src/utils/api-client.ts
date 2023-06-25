import { ApiResponse } from "@/types"

interface ApiClientParams {
  baseUrl?: string
  accessToken?: string
}

export default class ApiClient {
  private readonly baseUrl: string =
    process.env.BACKEND_BASE_URL ?? "http://localhost:8000/api/v1/"

  private readonly authorization: HeadersInit = {}

  constructor({ baseUrl, accessToken }: ApiClientParams = {}) {
    if (baseUrl) this.baseUrl = baseUrl
    if (accessToken) {
      this.authorization = { Authorization: `Bearer ${accessToken}` }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    const data = (await response.json()) as ApiResponse<T>
    return data.data
  }

  public async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: this.authorization,
    })

    return this.handleResponse(response)
  }

  public async post<T>(endpoint: string, data: object): Promise<T> {
    const response: Response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...this.authorization,
      },
      body: JSON.stringify(data),
    })

    return this.handleResponse(response)
  }

  public async put<T>(endpoint: string, data: object): Promise<T> {
    const response: Response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...this.authorization,
      },
      body: JSON.stringify(data),
    })

    return this.handleResponse(response)
  }

  public async delete(endpoint: string): Promise<void> {
    const response: Response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "DELETE",
      headers: this.authorization,
    })

    return this.handleResponse(response)
  }
}
