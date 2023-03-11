import { Button } from "react-bootstrap"
import { useOrder } from "../../hooks/useCarts"
import { Container } from "./styles"
import AlertConfirm from "react-alert-confirm"
import { toastSuccess } from "../../../../helpers/toast"

interface IProps {
  goNextPage: () => void
  goPreviousPage: () => void
  activeTab: string
}

function OrderOptions({ goNextPage, activeTab, goPreviousPage }: IProps) {
  const { cancelSale, finishSale } = useOrder()

  const onClickFinishSale = async (): Promise<void> => {
    const [isOk] = await AlertConfirm({
      title: "Deseja finalizar a venda?",
      okText: "Sim",
      cancelText: "Não"
    })
    if (isOk) {
      finishSale()
    }
  }

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
    {activeTab === "purchase"
      ? (
        <>
          <Button
            size="lg"
            variant="danger"
            onClick={() => { handleClickCancel() }}
          >
        Cancelar
          </Button>
          <Button size="lg" onClick={goNextPage}>Próximo</Button>
        </>)
      : (
        <>
          <Button
            variant="outline-primary"
            size="lg"
            type="button"
            onClick={goPreviousPage}
          >
        Voltar
          </Button>
          <Button size="lg" onClick={onClickFinishSale}>Finalizar</Button>
        </>)}
  </Container>
}

export { OrderOptions }
