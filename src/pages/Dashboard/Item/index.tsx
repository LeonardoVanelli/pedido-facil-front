import { Container, ItemCircle, ItemLabel } from "./styles"

interface IProps {
  children: React.ReactElement | React.ReactElement[]
  onClick?: () => void
  label: string
}

function Item({ children, onClick, label }: IProps) {
  return (
    <Container onClick={onClick}>
      <ItemCircle>
        {children}
      </ItemCircle>
      <ItemLabel>{label}</ItemLabel>
    </Container>
  )
}

export { Item }
