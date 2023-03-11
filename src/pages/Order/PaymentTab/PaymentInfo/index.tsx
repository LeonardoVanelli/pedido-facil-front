import { format } from "date-fns"
import { Table } from "react-bootstrap"
import { ptBR } from "../../../../helpers/language"
import { IPayment, useOrder } from "../../hooks/useCarts"
import {
  Container,
  TableContent,
  TableHead
} from "./styles"

const paramsNotShow = ["id", "type", "expiration_date", "value"]

function PaymentInfo() {
  const { payments } = useOrder()

  function rendOthers (payment: IPayment) {
    const paymentKeys = Object.keys(payment)

    return <>
      {paymentKeys.map(key => {
        if (paramsNotShow.includes(key)) return <></>
        const param = payment[key as "id"]

        if (param) {
          return (
            <span>
              <b>{ptBR[key as "value"]}</b>: <span style={{ marginRight: 10 }}>
                {param}
              </span>
            </span>
          )
        }

        return <></>
      })}
    </>
  }

  return <Container>
    <TableContent>
      <Table hover>
        <TableHead>
          <tr>
            <th>Parcela</th>
            <th>Tipo Pagamento</th>
            <th>Vencimento</th>
            <th>Valor</th>
            <th>Informações Adicionais</th>
          </tr>
        </TableHead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.type ?? ""}</td>
              <td>
                {format(payment.expiration_date, "dd/MM/yyyy")}
              </td>
              <td>{payment.value ?? ""}</td>
              <td>{rendOthers(payment)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContent>
  </Container>
}

export { PaymentInfo }
