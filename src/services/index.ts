import axios from "axios"
import { CreateSessionService } from "./CreateSessionService"
import { FindClientService } from "./FindClientService"
import { ListClientService } from "./ListClientService"
import { ListProductService } from "./ListProductService"
import { ListSellerService } from "./ListSellerService"

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export function setToken(token: string) {
  sessionStorage.setItem("user_token", token)
}

const createSessionService = new CreateSessionService(api)
const listProductService = new ListProductService(api)
const findClientService = new FindClientService(api)
const listSellerService = new ListSellerService(api)
const listClientService = new ListClientService(api)

export {
  createSessionService,
  listProductService,
  findClientService,
  listSellerService,
  listClientService
}
