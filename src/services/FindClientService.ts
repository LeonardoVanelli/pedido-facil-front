import { AxiosInstance } from "axios"
import { IFindClientService } from "./interfaces/IFindClientService"

class FindClientService {
  constructor(private readonly api: AxiosInstance) {}

  private readonly url = "/client/"

  async execute(
    document: string
  ): Promise<IFindClientService> {
    const user_token = sessionStorage.getItem("user_token")
    if (!user_token) {
      throw new Error("Token not found")
    }

    const formattedDocument = document.replace(/\W/g, "")

    try {
      const response =
      await this.api.get<IFindClientService>(this.url + formattedDocument, {
        headers: { Authorization: `Bearer ${user_token}` }
      })

      return response.data
    } catch (error: unknown) {
      console.log(error)
      throw error
    }
  }
}

export { FindClientService }
