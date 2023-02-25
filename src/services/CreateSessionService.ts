import { AxiosInstance } from "axios"
import { setToken } from "."
import { ICreateSessionService } from "./interfaces/ICreateSessionService"

class CreateSessionService {
  constructor(private readonly api: AxiosInstance) {}

  private readonly url = "/session"

  async execute(
    email: string,
    password: string
  ): Promise<ICreateSessionService> {
    try {
      const response = await this.api.post<ICreateSessionService>(this.url, {
        login: email,
        password
      })

      setToken(response.data.token)

      return response.data
    } catch (error: unknown) {
      console.log(error)
      throw error
    }
  }
}

export { CreateSessionService }
