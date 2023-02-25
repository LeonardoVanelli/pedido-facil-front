import axios from "axios"
import { CreateSessionService } from "./CreateSessionService"
import { ListProductService } from "./ListProductService"

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export function setToken(token: string) {
  sessionStorage.setItem("user_token", token)
}

const createSessionService = new CreateSessionService(api)
const listProductService = new ListProductService(api)

export { createSessionService, listProductService }
