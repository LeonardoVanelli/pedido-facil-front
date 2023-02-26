import { AxiosInstance } from "axios"
import { IListSellerService } from "./interfaces/IListSellerService"

class ListSellerService {
  constructor(private readonly api: AxiosInstance) {}

  private readonly url = "/sellers"

  async execute(
    name?: string,
    id?: string
  ): Promise<IListSellerService[]> {
    const user_token = sessionStorage.getItem("user_token")
    if (!user_token) {
      throw new Error("Token not found")
    }

    try {
      const response =
      await this.api.get<IListSellerService[]>(
        this.url,
        {
          params: {
            name: name ?? "",
            id: id ?? ""
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

export { ListSellerService }
