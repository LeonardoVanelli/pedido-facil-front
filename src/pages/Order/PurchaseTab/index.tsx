import { OrderData } from "./OrderData"
import { OrderProduct } from "./OrderProduct"
import { Container } from "./styles"

interface IProps {
  goNextPage: () => void
}

function PurchaseTab({ goNextPage }: IProps) {
  return <Container>
    <div>
      <OrderData />
      <OrderProduct />
    </div>
  </Container>
}

export { PurchaseTab }
