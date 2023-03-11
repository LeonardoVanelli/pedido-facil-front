import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect
} from "react"
import { toastError, toastSuccess } from "../../../helpers/toast"
import { findOrderSequenceService, finishSaleService } from "../../../services"

interface TransactionsProviderProps {
  children: ReactNode
}

interface ISale {
  client?: {
    id: string
    document: string
    name: string
  }
  seller?: {
    id: string
    name: string
  }
  date: Date
  order_id?: number
  amount: number
  exchange_amount: number
  discount?: number
  net_amount: number
  gross_valeu: number
  exchange_value: number
  sale_price: number
}

interface IProduct {
  id: number
  code: string
  style: string
  barcode: string
  quantity: number
  discount: number
  price: number
  priceNet: number
  valueNet: number
  canceled: boolean
  size: number
  description: string
  exchange: boolean
}

export interface IProductAdd {
  code: string
  style: string
  barcode: string
  quantity: number
  discount: number
  priceNet: number
  price: number
  size: number
  description: string
  exchange?: boolean
}

export interface IPayment {
  id: number
  value: number
  expiration_date: Date
  instalments: string
  title_number?: string
  card_approval_number?: string
  instalments_card?: number
  bank?: string
  agency?: string
  current_account?: string
  administrator_code?: string
  store_code?: string
  type: string
  approval?: string
}

interface IPaymentAdd {
  value: number
  expiration_date: Date
  instalments: string
  title_number?: string
  card_approval_number?: string
  instalments_card?: number
  bank?: string
  agency?: string
  current_account?: string
  administrator_code?: string
  store_code?: string
  type: string
  approval?: string
}

interface CartContextData {
  sale: ISale
  products: IProduct[]
  addProduct: (product: IProductAdd) => void
  removeProduct: (id: number) => void
  payments: IPayment[]
  addPayment: (payment: IPaymentAdd) => void
  changeClient: (id: string, name: string, document: string) => void
  changeSeller: (id: string, name: string) => void
  cancelSale: () => void
  finishSale: () => Promise<void>
}

const UserContext = createContext<CartContextData>({} as CartContextData)

const initialSale = {
  date: new Date(),
  amount: 0,
  exchange_amount: 0,
  exchange_value: 0,
  gross_valeu: 0,
  net_amount: 0,
  sale_price: 0
}

export function OrderProvider({
  children
}: TransactionsProviderProps): JSX.Element {
  const [sale, setSale] = useState<ISale>(initialSale)
  const [products, setProducts] = useState<IProduct[]>([])
  const [payments, setPayments] = useState<IPayment[]>([])

  async function changeSale(productsChanged: IProduct[]) {
    const saleInfo: ISale = {
      ...sale,
      amount: 0,
      exchange_amount: 0,
      exchange_value: 0,
      gross_valeu: 0,
      net_amount: 0,
      sale_price: 0
    }

    if (productsChanged.length === 1 && !sale.order_id) {
      const newOrderId = await findOrderSequenceService.execute()

      saleInfo.order_id = Number(newOrderId)
    }

    productsChanged.forEach((prod) => {
      if (!prod.exchange) {
        saleInfo.amount += prod.quantity
        saleInfo.gross_valeu += prod.price * prod.quantity
        saleInfo.sale_price += prod.valueNet * prod.quantity
      } else {
        saleInfo.exchange_amount += prod.quantity
        saleInfo.exchange_value += prod.price * prod.quantity
        saleInfo.sale_price -= prod.valueNet * prod.quantity
      }
      saleInfo.net_amount += prod.quantity
    }, 0)

    setSale(saleInfo)
  }

  useEffect(() => {
    if (products.length > 0) {
      sessionStorage.setItem("products", JSON.stringify(products))
    }
  }, [products])

  useEffect(() => {
    if (sale.order_id) {
      sessionStorage.setItem("sale", JSON.stringify(sale))
    }
  }, [sale])

  useEffect(() => {
    const saleSession = sessionStorage.getItem("sale")
    const productsSession = sessionStorage.getItem("products")

    if (saleSession) {
      setSale(JSON.parse(saleSession))
    }
    if (productsSession) {
      setProducts(JSON.parse(productsSession))
    }
  }, [])

  const addProduct = (productAdd: IProductAdd) => {
    let quantity = productAdd.quantity
    let valueNet = productAdd.priceNet

    if (productAdd.exchange) {
      quantity = quantity * -1
      valueNet = valueNet * -1
    }

    const product = {
      id: products.length + 1,
      canceled: false,
      exchange: productAdd.exchange ?? false,
      ...productAdd,
      quantity,
      valueNet

    }

    const newProducts = [...products, product]
    setProducts(newProducts)
    changeSale(newProducts)
  }

  const removeProduct = (id: number) => {
    const productToRemoveIndex = products
      .findIndex(product => product.id === id)

    const newProducts = [...products]

    newProducts[productToRemoveIndex].canceled = true
    newProducts[productToRemoveIndex].quantity = 0
    setProducts(newProducts)
    changeSale(newProducts)
  }

  const changeClient = (id: string, name: string, document: string) => {
    const client = {
      id,
      name,
      document
    }

    setSale({
      ...sale,
      client
    })
  }

  const changeSeller = (id: string, name: string) => {
    const seller = {
      id,
      name
    }

    setSale({
      ...sale,
      seller
    })
  }

  const cancelSale = () => {
    setSale(initialSale)
    setProducts([])
    sessionStorage.removeItem("products")
    sessionStorage.removeItem("sale")
  }

  const addPayment = (payment: IPaymentAdd) => {
    const newPayment = {
      id: payments.length + 1,
      ...payment
    }

    setPayments([...payments, newPayment])
  }

  const finishSale = async () => {
    if (!sale.order_id) {
      throw new Error("Pedido não cadastrado na venda")
    }

    if (!payments) {
      throw new Error("Nenhum pagamento registrado")
    }

    const payment_method_id = payments[0].type
    const paymentsBack = payments.map(payment => ({
      id: payment.id,
      administrator_code: payment.administrator_code,
      agency: payment.agency,
      bank: payment.bank,
      card_approval_number: "",
      current_account: payment.current_account,
      expiration_date: payment.expiration_date,
      instalments: payment.instalments,
      instalments_card: payment.instalments_card,
      title_number: payment.title_number,
      type: payment.type,
      value: payment.value
    }))

    const productsBack = products.map(product => ({
      amount: product.quantity,
      barcode: product.barcode,
      canceled: product.canceled,
      code: product.code,
      style: product.style,
      discount: product.discount,
      id: product.id,
      net_value: product.valueNet,
      size: product.size
    }))

    try {
      await finishSaleService.execute({
        amount: sale.amount,
        amount_value: sale.exchange_value,
        canceled: false,
        client_code: sale.client?.id ?? undefined,
        cpf_cgc_ecf: "",
        date: sale.date,
        discount: sale.discount ?? 0,
        order_id: sale.order_id ?? 0,
        payment_discount: sale.discount ?? 0,
        payment_method_id: payment_method_id ?? "",
        seller_id: sale.seller?.id ?? "",
        type: 1,
        payments: paymentsBack,
        products: productsBack
      })

      cancelSale()
      toastSuccess(`Pedido ${sale.order_id} finalizado`)
    } catch (error) {
      console.log(error)
      if (error instanceof Error) {
        toastError(error.message)
      } else {
        toastError("Falha ao salvar pedido")
      }
    }
  }

  const value = {
    sale,
    addProduct,
    removeProduct,
    products,
    changeClient,
    changeSeller,
    cancelSale,
    payments,
    addPayment,
    finishSale
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useOrder(): CartContextData {
  const context = useContext(UserContext)

  return context
}
