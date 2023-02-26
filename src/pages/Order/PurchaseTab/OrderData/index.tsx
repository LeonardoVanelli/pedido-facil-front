import { useState } from "react"
import { useFormik } from "formik"
import { Col, Form, Row } from "react-bootstrap"
import { Input } from "../../../../components/Input"
import { toastError } from "../../../../helpers/toast"
import {
  findClientService,
  listClientService,
  listSellerService
} from "../../../../services"
import { useOrder } from "../../hooks/useCarts"
import { Container } from "./styles"
import { ListSellerModal } from "./ListSellerModal"
import { IListSellerService }
  from "../../../../services/interfaces/IListSellerService"
import { IResponsePagination }
  from "../../../../services/interfaces/IResponsePagination"
import { IListClientService }
  from "../../../../services/interfaces/IListClientService"
import { ListClientModal } from "./ListClientModal"

function OrderData() {
  const [showModalSeller, setShowModalSeller] = useState(false)
  const [showModalClient, setShowModalClient] = useState(false)
  const [sellers, setSellers] = useState<IListSellerService[]>([])

  const initialClients = {
    current_page: 1,
    data: [],
    from: 0,
    to: 0,
    last_page: 1,
    per_page: 10,
    total: 0,
    next_page: 0,
    prev_page: 0
  }
  const [clients, setClients] =
    useState<IResponsePagination<IListClientService>>(initialClients)

  const { sale } = useOrder()

  const formik = useFormik({
    initialValues: {
      clientDocument: "",
      clientName: "",
      clientCode: "",
      sellerName: "",
      sellerCode: "",
      date: sale.date.toISOString().split("T")[0],
      ticket: ""
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  const listClient = async (
    page: number,
    perPage: number,
    search?: string | null
  ): Promise<void> => {
    if (search) {
      const clients = await listClientService.execute(page,
        perPage,
        search,
        search,
        search,
        search
      )

      setClients(clients)
    }
    setShowModalClient(true)
  }

  const findClient = async () => {
    try {
      const { clientDocument } = formik.values
      if (clientDocument.length === 14) {
        const client =
        await findClientService.execute(clientDocument)

        setClient(client.id, client.name)
      }
    } catch (error) {
      toastError("Cliente não encontrado")
      formik.setFieldValue("clientDocument", "")
      formik.setFieldValue("clientName", "")
      formik.setFieldValue("clientCode", "")
    }
  }

  function setClient(id: string, name: string) {
    formik.setFieldValue("clientCode", id)
    formik.setFieldValue("clientName", name)

    setShowModalClient(false)
    setClients(initialClients)
  }

  const findSeller = async () => {
    try {
      const { sellerCode } = formik.values
      if (sellerCode.length > 0) {
        const seller =
        await listSellerService.execute(undefined, sellerCode)

        if (!seller) {
          throw new Error("Vendedor não encontrado")
        }

        setSeller(seller[0].id, seller[0].name)
      }
    } catch (error) {
      toastError("Vendedor não encontrado")
      formik.setFieldValue("sellerName", "")
      formik.setFieldValue("sellerCode", "")
    }
  }

  const listSeller = async () => {
    try {
      const seller =
        await listSellerService.execute(undefined, undefined)

      if (!seller) {
        throw new Error("Vendedor não encontrado")
      }

      setSellers(seller)
      setShowModalSeller(true)
    } catch (error) {
      toastError("Nenhum vendedor foi encontrado")
      formik.setFieldValue("sellerName", "")
      formik.setFieldValue("sellerCode", "")
    }
  }

  function setSeller(id: string, name: string) {
    formik.setFieldValue("sellerCode", id)
    formik.setFieldValue("sellerName", name)
    setShowModalSeller(false)
  }

  return <Container>
    <Form
      onSubmit={formik.handleSubmit}
      validated={formik.isValidating && formik.isValid}
    >
      <Row md={6}>
        <Col md={2} lg={2} xl={2}>
          <Input
            id="clientDocument"
            label="CPF"
            mask="999.999.999-99"
            onChange={formik.handleChange}
            value={formik.values.clientDocument}
            isValid={
              formik.touched.clientDocument &&
              !formik.errors.clientDocument
            }
            errorMessage={formik.errors.clientDocument}
            onClickSearch={() => { listClient(1, 10) }}
            onBlur={() => { findClient() }}
            onKeyUp={e => {
              if (e.key === "Enter") { findClient() }
            }}
          />
        </Col>

        <Col md={4} lg={4} xl={4}>
          <Input
            id="clientName"
            label="Nome do Cliente"
            placeholder=""
            onChange={formik.handleChange}
            value={formik.values.clientName}
            isValid={formik.touched.clientName && !formik.errors.clientName}
            errorMessage={formik.errors.clientName}
            disabled
          />
        </Col>

        <Col md={3} lg={2} xl={2}>
          <Input
            id="clientCode"
            label="Código do Cliente"
            placeholder=""
            onChange={formik.handleChange}
            value={formik.values.clientCode}
            isValid={formik.touched.clientCode && !formik.errors.clientCode}
            errorMessage={formik.errors.clientCode}
            disabled
          />
        </Col>
      </Row>
      <Row md={6}>
        <Col md={2} lg={2} xl={2}>
          <Input
            id="sellerCode"
            label="Código do Vendedor"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.sellerCode}
            isValid={formik.touched.sellerCode && !formik.errors.sellerCode}
            errorMessage={formik.errors.sellerCode}
            onClickSearch={() => { listSeller() }}
            onBlur={() => { findSeller() }}
            onKeyUp={e => {
              if (e.key === "Enter") { findSeller() }
            }}
          />
        </Col>

        <Col md={4} lg={4} xl={4}>
          <Input
            id="sellerName"
            label="Nome do Vendedor"
            value={formik.values.sellerName}
            disabled
          />
        </Col>

        <Col md={3} lg={2} xl={2}>
          <Input
            id="date"
            label="Data"
            type="date"
            placeholder="Digite Aqui"
            value={formik.values.date}
            disabled
          />
        </Col>

        <Col md={3} lg={2} xl={2}>
          <Input
            id="ticket"
            label="Pedido"
            placeholder=""
            value={formik.values.ticket}
            disabled
          />
        </Col>
      </Row>

    </Form>

    <ListSellerModal
      showModal={showModalSeller}
      onHideModal={() => setShowModalSeller(false)}
      sellers={sellers}
      handleSelectSeller={(id, name) => {
        setSeller(id, name)
      }}
    />

    <ListClientModal
      showModal={showModalClient}
      onHideModal={() => {
        setShowModalClient(false)
        setClients(initialClients)
      }}
      clients={clients.data}
      currentPage={clients.current_page}
      lastPage={clients.last_page ?? 1}
      onChangePage={async (perPage: number, page: number) =>
        await listClient(page, perPage)
      }
      handleSelectClient={(id, name) => {
        setClient(id, name)
      }}
      onSearch={async (search: string | null) => {
        await listClient(1, 15, search)
      }}
    />
  </Container>
}

export { OrderData }
