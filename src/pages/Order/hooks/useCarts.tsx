import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect
} from "react"

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
  order_id?: string
  amount: number
  exchange_amount: number
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

interface CartContextData {
  sale: ISale
  products: IProduct[]
  addProduct: (product: IProductAdd) => void
  removeProduct: (id: number) => void
}

const UserContext = createContext<CartContextData>({} as CartContextData)

export function OrderProvider({
  children
}: TransactionsProviderProps): JSX.Element {
  const [sale, setSale] = useState<ISale>({
    date: new Date(),
    amount: 0,
    exchange_amount: 0,
    exchange_value: 0,
    gross_valeu: 0,
    net_amount: 0,
    sale_price: 0
  })
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const saleInfo: ISale = {
      ...sale,
      amount: 0,
      exchange_amount: 0,
      exchange_value: 0,
      gross_valeu: 0,
      net_amount: 0,
      sale_price: 0
    }

    products.forEach((prod) => {
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
  }, [products])

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
    setProducts([...products, product])
  }

  const removeProduct = (id: number) => {
    const productToRemoveIndex = products
      .findIndex(product => product.id === id)

    const newProducts = [...products]

    newProducts[productToRemoveIndex].canceled = true
    newProducts[productToRemoveIndex].quantity = 0
    setProducts(newProducts)
  }

  const value = {
    sale,
    addProduct,
    removeProduct,
    products
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useOrder(): CartContextData {
  const context = useContext(UserContext)

  return context
}
