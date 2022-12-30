import { Button } from "react-bootstrap"
import {
  Container,
  Infos,
  Divisor,
  LabelInfo,
  TabInfo,
  OrderAmount,
  Actions
}
  from "./styles"

interface IProps {
  goPreviousPage: () => void
}

function OrderInfo({ goPreviousPage }: IProps) {
  return <Container>
    <Infos>
      <div>
        <TabInfo maxWidth="300">
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
        <TabInfo maxWidth="300">
          <div>
            <div>
              <LabelInfo color="blue">Desconto (R$)</LabelInfo>
              <span>R$ 299,96</span>
            </div>
            <div>
              <LabelInfo color="blue">Desconto (%)</LabelInfo>
              <span>0,00%</span>
            </div>
          </div>
        </TabInfo>
      </div>
      <OrderAmount>
        <TabInfo maxWidth="300">
          <div>
            <div>
              <LabelInfo color="blue">Valor do Pedido</LabelInfo>
              <span>R$ 299,96</span>
            </div>
          </div>
        </TabInfo>
      </OrderAmount>
    </Infos>
    <Actions>
      <Button
        variant="outline-primary"
        size="lg"
        type="button"
        onClick={goPreviousPage}>
        Voltar
      </Button>
      <Button size="lg">Finalizar</Button>
    </Actions>
  </Container>
}

export { OrderInfo }
