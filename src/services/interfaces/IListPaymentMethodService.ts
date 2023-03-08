interface IListPaymentMethodService {
  id: string
  description: string
  discount: number
  minimum_value: number
  maximum_value: number
  sale_operation: string
  description_sale_operation: string
  limit_discount: number
  limit_discount_manager: number
}

export { IListPaymentMethodService }
