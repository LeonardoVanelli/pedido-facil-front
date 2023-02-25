import { Modal } from "react-bootstrap"
import { PaginationTable } from "../../../../../components/PaginationTable"
import { IListProductService }
  from "../../../../../services/interfaces/IListProductService"
import { IProductAdd } from "../../../hooks/useCarts"
import { Container, TableHead } from "./styles"

interface IProps {
  showModal: boolean
  onHideModal: () => void
  products: IListProductService[]
  currentPage: number
  lastPage: number
  onChangePage: (perPage: number, page: number) => Promise<void>
  handleSelectProduct: ({
    barcode,
    code,
    discount,
    size,
    priceNet,
    price,
    quantity,
    style,
    description
  }: IProductAdd) => void
}

function ListProductModal({
  showModal,
  onHideModal,
  products,
  currentPage,
  lastPage,
  onChangePage,
  handleSelectProduct
}: IProps) {
  return <Container>
    <Modal
      size="lg"
      show={showModal}
      onHide={onHideModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Body>
        <PaginationTable
          onChangePage={(
            perPage: number,
            page: number
          ) => { onChangePage(perPage, page) }}
          currentPage={currentPage}
          lastPage={lastPage}
        >
          <TableHead>
            <tr>
              <th>Produto</th>
              <th>Cor</th>
              <th>Tamanho</th>
              <th>Preço</th>
              <th>Preço Liquido</th>
              <th>Estoque</th>
              <th>Código de Barra</th>
            </tr>
          </TableHead>
          <tbody>
            {products.map(product => (
              <tr
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleSelectProduct({
                    barcode: product.barcode,
                    code: product.code,
                    discount: 0,
                    size: product.size,
                    price: product.price,
                    priceNet: product.price_net,
                    quantity: 1,
                    style: product.style,
                    description: product.description
                  })
                }}
                key={product.barcode}>
                <td>{product.code}</td>
                <td>{product.style}</td>
                <td>{product.grade}</td>
                <td>{product.price}</td>
                <td>{product.price_net}</td>
                <td>{product.estoque}</td>
                <td>{product.barcode}</td>
              </tr>
            ))}
          </tbody>
        </PaginationTable>
      </Modal.Body>
    </Modal>
  </Container>
}

export { ListProductModal }
