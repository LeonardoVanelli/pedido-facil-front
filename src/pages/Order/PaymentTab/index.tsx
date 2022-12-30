import { OrderInfo } from "./OrderInfo"
import { SelectMethods } from "./SelectMethods"
import { Container, PaymentInfos } from "./styles"

interface IProps {
  goPreviousPage: () => void
}

function PaymentTab({ goPreviousPage }: IProps) {
  return <Container>
    <SelectMethods />
    <PaymentInfos>
      <div />
      <OrderInfo goPreviousPage={goPreviousPage}></OrderInfo>
    </PaymentInfos>
  </Container>
}

export { PaymentTab }
