import axios from "axios"
import { CreateSessionService } from "./CreateSessionService"

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const createSessionService = new CreateSessionService(api)

export { createSessionService }
