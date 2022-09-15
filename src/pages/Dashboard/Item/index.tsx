import { Container, ItemCircle, ItemLabel } from "./styles"

interface IProps {
  children: React.ReactElement | React.ReactElement[]
  onClick?: () => void
}

function Item({ children, onClick }: IProps) {
  return (
    <Container onClick={onClick}>
      <ItemCircle>
        {children}
      </ItemCircle>
      <ItemLabel>Novo Pedido</ItemLabel>
    </Container>
  )
}

export { Item }
