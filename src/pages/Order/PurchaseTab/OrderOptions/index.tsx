import { Button } from "react-bootstrap"
import { Container } from "./styles"

interface IProps {
  goNextPage: () => void
}

function OrderOptions({ goNextPage }: IProps) {
  return <Container>
    <Button size="lg" variant="danger">Cancelar</Button>
    <Button size="lg" onClick={goNextPage}>Próximo</Button>
  </Container>
}

export { OrderOptions }
