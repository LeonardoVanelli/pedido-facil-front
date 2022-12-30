import { FiCreditCard } from "react-icons/fi"
import { MdOutlineAttachMoney } from "react-icons/md"
import { HiDotsHorizontal } from "react-icons/hi"
import { CiShoppingTag } from "react-icons/ci"
import { BiTransfer } from "react-icons/bi"
import { Container, PaymentType, Label } from "./styles"

function SelectMethods() {
  return (<Container>
    <PaymentType>
      <Label>Dinheiro</Label>
      <MdOutlineAttachMoney />
    </PaymentType>
    <PaymentType>
      <Label>Crédito</Label>
      <FiCreditCard />
    </PaymentType>
    <PaymentType>
      <Label>Débito</Label>
      <FiCreditCard />
    </PaymentType>
    <PaymentType>
      <Label>Cupom</Label>
      <CiShoppingTag />
    </PaymentType>
    <PaymentType>
      <Label>Vale Troca</Label>
      <BiTransfer />
    </PaymentType>
    <PaymentType>
      <Label>Mais</Label>
      <HiDotsHorizontal />
    </PaymentType>
  </Container>)
}

export { SelectMethods }
