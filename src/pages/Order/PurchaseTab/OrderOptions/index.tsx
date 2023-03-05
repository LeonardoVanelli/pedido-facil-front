import { Button } from "react-bootstrap"
import { useOrder } from "../../hooks/useCarts"
import { Container } from "./styles"
import AlertConfirm from "react-alert-confirm"
import { toastSuccess } from "../../../../helpers/toast"

interface IProps {
  goNextPage: () => void
}

function OrderOptions({ goNextPage }: IProps) {
  const { cancelSale } = useOrder()

  const handleClickCancel = async () => {
    const [isOk] = await AlertConfirm({
      title: "Deseja cancelar a venda?",
      okText: "Sim",
      cancelText: "Não"
    })
    if (isOk) {
      cancelSale()
      toastSuccess("Venda cancelada")
    }
  }

  return <Container>
    <Button
      size="lg"
      variant="danger"
      onClick={() => { handleClickCancel() }}>
        Cancelar
    </Button>
    <Button size="lg" onClick={goNextPage}>Próximo</Button>
  </Container>
}

export { OrderOptions }
