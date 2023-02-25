import { Form } from "react-bootstrap"
import { formatToLocalCurrency } from "../../../../helpers/currency"
import { useOrder } from "../../hooks/useCarts"
import { Container, TabInfo, Divisor, LabelInfo } from "./styles"

function OrderInfo() {
  const { sale } = useOrder()

  return <Container>
    <TabInfo maxWidth="250">
      <div>
        <div>
          <LabelInfo color="blue">Venda</LabelInfo>
          <span>{sale.amount}</span>
        </div>
        <div>
          <LabelInfo color="red">Troca</LabelInfo>
          <span>{sale.exchange_amount}</span>
        </div>
      </div>
      <div>
        <div>
          <LabelInfo color="blue">Liquida</LabelInfo>
          <span>{sale.net_amount}</span>
        </div>
      </div>
    </TabInfo>
    <Divisor />
    <TabInfo maxWidth="250">
      <div>
        <div>
          <LabelInfo color="blue">Valor Bruto</LabelInfo>
          <span>{formatToLocalCurrency(sale.gross_valeu)}</span>
        </div>
        <div>
          <LabelInfo color="red">Valor Troca</LabelInfo>
          <span>{formatToLocalCurrency(sale.exchange_value)}</span>
        </div>
      </div>
    </TabInfo>
    <Divisor />
    <TabInfo maxWidth="250">
      <div>
        <div>
          <LabelInfo color="blue">Desconto (R$)</LabelInfo>
          <span>R$ 0,00</span>
        </div>
        <div>
          <LabelInfo color="blue">Desconto (%)</LabelInfo>
          <span>0,00%</span>
        </div>
      </div>
    </TabInfo>
    <Divisor />
    <TabInfo minWidth="300">
      <div>
        <div>
          <label>Valor do Pedido</label>
          <span>{formatToLocalCurrency(sale.sale_price)}</span>
        </div>
        <div>
          <Form.Check
            type="checkbox"
            name="pre-sale"
            id="pre-sale"
            label="Gera pré-venda para finalizar no PDV"
          />

        </div>
      </div>
    </TabInfo>
  </Container>
}

export { OrderInfo }
