import { AxiosInstance } from "axios"
import { IListCardAdministratorService }
  from "./interfaces/IListCardAdministratorService"

class ListCardAdministratorService {
  constructor(private readonly api: AxiosInstance) {}

  private readonly url = "/cards/administrators"

  async execute(): Promise<IListCardAdministratorService[]> {
    const user_token = sessionStorage.getItem("user_token")
    if (!user_token) {
      throw new Error("Token not found")
    }

    try {
      const response =
      await this.api.get<IListCardAdministratorService[]>(
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

export { ListCardAdministratorService }
