interface IFinishSaleService {
  order_id: number
  date: Date
  type: number
  seller_id: string
  client_code?: string
  amount: number
  amount_value: number
  discount: number
  payment_discount: number
  payment_method_id: string
  canceled: boolean
  cpf_cgc_ecf: string
  payments: Array<{
    id: number
    instalments: string
    expiration_date: Date
    value: number
    title_number?: string
    card_approval_number?: string
    instalments_card?: number
    bank?: string
    agency?: string
    current_account?: string
    administrator_code?: string
    type: string
  }>
  products: Array<{
    id: number
    code: string
    style: string
    barcode: string
    amount: number
    discount: number
    net_value: number
    canceled: boolean
    size: number
  }>
}

export { IFinishSaleService }
