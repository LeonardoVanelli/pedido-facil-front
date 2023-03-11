import axios from "axios"
import { CreateSessionService } from "./CreateSessionService"
import { FindClientService } from "./FindClientService"
import { FindOrderSequenceService } from "./FindOrderSequenceService"
import { FinishSaleService } from "./FinishSaleService"
import { ListCardAdministratorService } from "./ListCardAdministratorService"
import { ListClientService } from "./ListClientService"
import { ListPaymentMethodService } from "./ListPaymentMethodService"
import { ListPaymentTypeService } from "./ListPaymentTypeService"
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
const findOrderSequenceService = new FindOrderSequenceService(api)
const listPaymentTypeService = new ListPaymentTypeService(api)
const listPaymentMethodService = new ListPaymentMethodService(api)
const listCardAdministratorService = new ListCardAdministratorService(api)
const finishSaleService = new FinishSaleService(api)

export {
  createSessionService,
  listProductService,
  findClientService,
  listSellerService,
  listClientService,
  findOrderSequenceService,
  listPaymentTypeService,
  listPaymentMethodService,
  listCardAdministratorService,
  finishSaleService
}
