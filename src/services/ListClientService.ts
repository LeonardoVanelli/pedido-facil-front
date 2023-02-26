import { AxiosInstance } from "axios"
import { IListClientService } from "./interfaces/IListClientService"
import { IResponsePagination } from "./interfaces/IResponsePagination"

class ListClientService {
  constructor(private readonly api: AxiosInstance) {}

  private readonly url = "/client"

  async execute(
    page: number,
    perPage: number,
    document?: string,
    email?: string,
    id?: string,
    name?: string
  ): Promise<IResponsePagination<IListClientService>> {
    const user_token = sessionStorage.getItem("user_token")
    if (!user_token) {
      throw new Error("Token not found")
    }

    const params: {
      document?: string
      email?: string
      id?: string
      name?: string
    } = {}
    if (document) { params.document = document }
    if (email) {
      params.email = email
    }
    if (id) {
      params.id = id
    }
    if (name) {
      params.name = name
    }

    try {
      const response =
      await this.api.get<IResponsePagination<IListClientService>>(
        this.url,
        {
          params,
          headers: { Authorization: `Bearer ${user_token}` }
        })

      return response.data
    } catch (error: unknown) {
      console.log(error)
      throw error
    }
  }
}

export { ListClientService }
