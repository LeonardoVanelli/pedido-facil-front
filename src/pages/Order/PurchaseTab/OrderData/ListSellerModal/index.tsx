import { Modal } from "react-bootstrap"
import { PaginationTable } from "../../../../../components/PaginationTable"
import { IListSellerService }
  from "../../../../../services/interfaces/IListSellerService"
import { Container, TableHead } from "./styles"

interface IProps {
  showModal: boolean
  onHideModal: () => void
  sellers: IListSellerService[]
  handleSelectSeller: (id: string, name: string) => void
}

function ListSellerModal({
  showModal,
  onHideModal,
  sellers,
  handleSelectSeller
}: IProps) {
  return <Container>
    <Modal
      size="lg"
      show={showModal}
      onHide={onHideModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Selecione o Vendedor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PaginationTable
          onChangePage={(
            perPage: number,
            page: number
          ) => { console.log(perPage, page) }}
          currentPage={1}
          lastPage={1}
        >
          <TableHead>
            <tr>
              <th>Nome</th>
              <th>Código</th>
            </tr>
          </TableHead>
          <tbody>
            {sellers.map(seller => (
              <tr
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleSelectSeller(
                    seller.id,
                    seller.name
                  )
                }}
                key={seller.id}>
                <td>{seller.id}</td>
                <td>{seller.name}</td>
              </tr>
            ))}
          </tbody>
        </PaginationTable>
      </Modal.Body>
    </Modal>
  </Container>
}

export { ListSellerModal }
