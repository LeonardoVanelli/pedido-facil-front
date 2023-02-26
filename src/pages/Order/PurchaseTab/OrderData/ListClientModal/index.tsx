import { Modal } from "react-bootstrap"
import { PaginationTable } from "../../../../../components/PaginationTable"
import { IListClientService }
  from "../../../../../services/interfaces/IListClientService"

import { Container, TableHead } from "./styles"

interface IProps {
  showModal: boolean
  onHideModal: () => void
  clients: IListClientService[]
  handleSelectClient: (id: string, name: string) => void
  currentPage: number
  lastPage: number
  onChangePage: (perPage: number, page: number) => Promise<void>
  onSearch?: (search: string | null) => Promise<void>
}

function ListClientModal({
  showModal,
  onHideModal,
  clients,
  handleSelectClient,
  currentPage,
  lastPage,
  onChangePage,
  onSearch
}: IProps) {
  return <Container>
    <Modal
      size="xl"
      fullscreen
      show={showModal}
      onHide={onHideModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Selecione o Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PaginationTable
          onChangePage={(
            perPage: number,
            page: number
          ) => { onChangePage(perPage, page) }}
          currentPage={currentPage}
          lastPage={lastPage}
          onSearch={onSearch}
        >
          <TableHead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Tipo Varejo</th>
              <th>CPF</th>
              <th>Cidade</th>
              <th>UF</th>
              <th>Telefone</th>
              <th>Aniversário</th>
              <th>E-mail</th>
            </tr>
          </TableHead>
          <tbody>
            {clients.map(client => (
              <tr
                style={{ cursor: "pointer" }}
                key={client.id}
                onClick={() => {
                  handleSelectClient(
                    client.id,
                    client.name
                  )
                }}
              >
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.retail_type}</td>
                <td>{client.document}</td>
                <td>{client.address.city}</td>
                <td>{client.address.uf}</td>
                <td>{client.phone_ddd + client.phone_number}</td>
                <td>{client.birthday?.toString() ?? "N/A"}</td>
                <td>{client.email}</td>
              </tr>
            ))}
          </tbody>
        </PaginationTable>
      </Modal.Body>
    </Modal>
  </Container>
}

export { ListClientModal }
