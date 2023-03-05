import { AxiosInstance } from "axios"

class FindOrderSequenceService {
  constructor(private readonly api: AxiosInstance) {}

  private readonly url = "/seles/getOrderId"

  async execute(): Promise<string> {
    const user_token = sessionStorage.getItem("user_token")
    if (!user_token) {
      throw new Error("Token not found")
    }

    try {
      const response =
      await this.api.get<string>(this.url, {
        headers: { Authorization: `Bearer ${user_token}` }
      })

      return response.data
    } catch (error: unknown) {
      console.log(error)
      throw error
    }
  }
}

export { FindOrderSequenceService }
