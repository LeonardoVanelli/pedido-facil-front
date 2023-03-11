import { PaymentInfo } from "./PaymentInfo"
import { SelectMethods } from "./SelectMethods"
import { Container } from "./styles"

function PaymentTab() {
  return <Container>
    <SelectMethods />
    <PaymentInfo />
  </Container>
}

export { PaymentTab }
