import { AxiosInstance } from "axios"
import { IListProductService } from "./interfaces/IListProductService"
import { IResponsePagination } from "./interfaces/IResponsePagination"

class ListProductService {
  constructor(private readonly api: AxiosInstance) {}

  private readonly url = "/products"

  async execute(
    productCode: string,
    perPage: number,
    page: number
  ): Promise<IResponsePagination<IListProductService>> {
    const user_token = sessionStorage.getItem("user_token")
    if (!user_token) {
      throw new Error("Token not found")
    }

    try {
      const response =
      await this.api.get<IResponsePagination<IListProductService>>(this.url, {
        params: {
          product_code: productCode,
          page,
          per_page: perPage
        },
        headers: { Authorization: `Bearer ${user_token}` }
      })

      return response.data
    } catch (error: unknown) {
      console.log(error)
      throw error
    }
  }
}

export { ListProductService }
