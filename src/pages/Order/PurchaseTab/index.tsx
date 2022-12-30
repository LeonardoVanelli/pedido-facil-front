import { OrderData } from "./OrderData"
import { OrderInfo } from "./OrderInfo"
import { OrderOptions } from "./OrderOptions"
import { OrderProduct } from "./OrderProduct"
import { Container, OrderFooter } from "./styles"

interface IProps {
  goNextPage: () => void
}

function PurchaseTab({ goNextPage }: IProps) {
  return <Container>
    <OrderData />
    <OrderProduct />
    <OrderFooter>
      <OrderInfo />
      <OrderOptions goNextPage={goNextPage}/>
    </OrderFooter>
  </Container>
}

export { PurchaseTab }
