import { AxiosInstance } from "axios"
import { IListPaymentTypeService } from "./interfaces/IListPaymentTypeService"

class ListPaymentTypeService {
  constructor(private readonly api: AxiosInstance) {}

  private readonly url = "/seles/types"

  async execute(): Promise<IListPaymentTypeService[]> {
    const user_token = sessionStorage.getItem("user_token")
    if (!user_token) {
      throw new Error("Token not found")
    }

    try {
      const response =
      await this.api.get<IListPaymentTypeService[]>(
        this.url,
        {
          headers: { Authorization: `Bearer ${user_token}` }
        })

      return response.data
    } catch (error: unknown) {
      console.log(error)
      throw error
    }
  }
}

export { ListPaymentTypeService }
