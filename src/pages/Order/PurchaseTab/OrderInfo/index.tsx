import { Form } from "react-bootstrap"
import { Container, TabInfo, Divisor, LabelInfo } from "./styles"

function OrderInfo() {
  return <Container>
    <TabInfo maxWidth="250">
      <div>
        <div>
          <LabelInfo color="blue">Venda</LabelInfo>
          <span>04</span>
        </div>
        <div>
          <LabelInfo color="red">Troca</LabelInfo>
          <span>0</span>
        </div>
      </div>
      <div>
        <div>
          <LabelInfo color="blue">Liquida</LabelInfo>
          <span>04</span>
        </div>
      </div>
    </TabInfo>
    <Divisor />
    <TabInfo maxWidth="250">
      <div>
        <div>
          <LabelInfo color="blue">Valor Bruto</LabelInfo>
          <span>R$ 299,96</span>
        </div>
        <div>
          <LabelInfo color="red">Valor Troca</LabelInfo>
          <span>R$ 0,00</span>
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
          <span>R$ 299,96</span>
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
