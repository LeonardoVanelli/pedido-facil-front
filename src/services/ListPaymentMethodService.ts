import { AxiosInstance } from "axios"
import { IListPaymentMethodService }
  from "./interfaces/IListPaymentMethodService"

class ListPaymentMethodService {
  constructor(private readonly api: AxiosInstance) {}

  private readonly url = "/seles/methods"

  async execute(): Promise<IListPaymentMethodService[]> {
    const user_token = sessionStorage.getItem("user_token")
    if (!user_token) {
      throw new Error("Token not found")
    }

    try {
      const response =
      await this.api.get<IListPaymentMethodService[]>(
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

export { ListPaymentMethodService }
