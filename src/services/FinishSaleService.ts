import { AxiosInstance } from "axios"
import { IFinishSaleService } from "./interfaces/IFinishSaleService"

class FinishSaleService {
  constructor(private readonly api: AxiosInstance) {}

  private readonly url = "/seles/finish"

  async execute(
    sale: IFinishSaleService
  ): Promise<void> {
    try {
      const user_token = sessionStorage.getItem("user_token")
      if (!user_token) {
        throw new Error("Token not found")
      }

      await this.api.post(this.url, sale, {
        headers: { Authorization: `Bearer ${user_token}` }
      })
    } catch (error: unknown) {
      console.log(error)
      throw error
    }
  }
}

export { FinishSaleService }
