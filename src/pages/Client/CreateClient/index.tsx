import { useEffect } from "react"
import { useFormik } from "formik"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Input } from "../../../components/Input"
import { InputSelect } from "../../../components/InputSelect"

import { Container, SessionTitle } from "./styles"
import { RightDiv } from "../../../components/RightDiv"

const ufOptions = [
  { value: "SC", label: "SC" },
  { value: "SP", label: "SP" },
  { value: "RS", label: "RS" }
]

const retailTypeOptions = [
  { value: "Cliente Varejo", label: "Cliente Varejo" },
  { value: "Funcionário", label: "Funcionário" },
  { value: "Cliente WEB", label: "Cliente WEB" }
]

function CreateClient() {
  const { clientId } = useParams()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const viewMode = pathname.includes("view")

  console.log({ viewMode })

  useEffect(() => {
    if (clientId) {
      console.log("Consulta cliente com o id: " + clientId)
    }
  }, [clientId])

  const inputLabel = clientId ? "Salvar" : "Cadastrar Cliente"

  const formik = useFormik({
    initialValues: {
      document: "",
      name: "",
      email: "",
      cell_phone: "",
      phone: "",
      date: "",
      ticket: "",
      cep: "",
      uf: "",
      city: "",
      street: "",
      number: "",
      district: "",
      complement: "",
      retail_type: "",
      registration_date: "",
      store: ""
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return <Container>
    <Form
      onSubmit={formik.handleSubmit}
      validated={formik.isValidating && formik.isValid}
    >
      <SessionTitle md={12} lg={12} xl={12}>
        <span>Dados Pessoais</span>
      </SessionTitle>
      <Row md={6}>
        <Col md={3} lg={2} xl={2}>
          <Input
            id="document"
            label="CPF"
            mask="999.999.999-99"
            onChange={formik.handleChange}
            value={formik.values.document}
            isValid={
              formik.touched.document &&
              !formik.errors.document
            }
            errorMessage={formik.errors.document}
            disabled={viewMode}
          />
        </Col>

        <Col md={4} lg={4} xl={4}>
          <Input
            id="name"
            label="Nome do Cliente"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.name}
            isValid={formik.touched.name && !formik.errors.name}
            errorMessage={formik.errors.name}
            disabled={viewMode}
          />
        </Col>

        <Col md={4} lg={4} xl={4}>
          <Input
            id="email"
            label="E-mail"
            type="email"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.email}
            isValid={formik.touched.email && !formik.errors.email}
            errorMessage={formik.errors.email}
            disabled={viewMode}
          />
        </Col>
      </Row>
      <Row md={6}>
        <Col md={3} lg={2} xl={2}>
          <Input
            id="cell_phone"
            label="Celular"
            onChange={formik.handleChange}
            value={formik.values.cell_phone}
            isValid={formik.touched.cell_phone && !formik.errors.cell_phone}
            errorMessage={formik.errors.cell_phone}
            disabled={viewMode}
          />
        </Col>

        <Col md={3} lg={2} xl={2}>
          <Input
            id="phone"
            label="Telefone"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.phone}
            isValid={formik.touched.phone && !formik.errors.phone}
            errorMessage={formik.errors.phone}
            disabled={viewMode}
          />
        </Col>

        <Col md={3} lg={2} xl={2}>
          <Input
            id="date"
            label="Nascimento"
            type="date"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.date}
            isValid={formik.touched.date && !formik.errors.date}
            errorMessage={formik.errors.date}
            disabled={viewMode}
          />
        </Col>
      </Row>
      <SessionTitle md={12} lg={12} xl={12}>
        <span>Endereço</span>
      </SessionTitle>
      <Row>
        <Col md={3} lg={2} xl={2}>
          <Input
            id="cep"
            label="CEP"
            mask="99999-999"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.cep}
            isValid={formik.touched.cep && !formik.errors.cep}
            errorMessage={formik.errors.cep}
            disabled={viewMode}
          />
        </Col>
        <Col md={2} lg={1} xl={1}>
          <InputSelect
            id="uf"
            label="UF"
            options={ufOptions}
            type="date"
            placeholder="Digite Aqui"
            setFieldValue={async (field: string, value: string) => {
              await formik.setFieldValue(field, value)
            }}
            value={formik.values.uf}
            isValid={formik.touched.uf && !formik.errors.uf}
            errorMessage={formik.errors.uf}
            disabled={viewMode}
          />
        </Col>
        <Col md={7} lg={4} xl={3}>
          <Input
            id="city"
            label="Cidade"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.city}
            isValid={formik.touched.city && !formik.errors.city}
            errorMessage={formik.errors.city}
            disabled={viewMode}
          />
        </Col>
        <Col md={4} lg={4} xl={3}>
          <Input
            id="street"
            label="Endereço"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.street}
            isValid={formik.touched.street && !formik.errors.street}
            errorMessage={formik.errors.street}
            disabled={viewMode}
          />
        </Col>
        <Col md={2} lg={1} xl={1}>
          <Input
            id="number"
            label="Número"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.number}
            isValid={formik.touched.number && !formik.errors.number}
            errorMessage={formik.errors.number}
            disabled={viewMode}
          />
        </Col>
        <Col md={3} lg={3} xl={3}>
          <Input
            id="district"
            label="Bairro"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.district}
            isValid={formik.touched.district && !formik.errors.district}
            errorMessage={formik.errors.district}
            disabled={viewMode}
          />
        </Col>
        <Col md={3} lg={3} xl={3}>
          <Input
            id="complement"
            label="Complemento"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.complement}
            isValid={formik.touched.complement && !formik.errors.complement}
            errorMessage={formik.errors.complement}
            disabled={viewMode}
          />
        </Col>
      </Row>
      <SessionTitle md={12} lg={12} xl={12}>
        <span>Outros</span>
      </SessionTitle>
      <Row>
        <Col md={3} lg={3} xl={3}>
          <InputSelect
            id="retail_type"
            label="Tipo Cliente"
            options={retailTypeOptions}
            placeholder="Digite Aqui"
            setFieldValue={async (field: string, value: string) => {
              await formik.setFieldValue(field, value)
            }}
            value={formik.values.retail_type}
            isValid={formik.touched.retail_type && !formik.errors.retail_type}
            errorMessage={formik.errors.retail_type}
            disabled={viewMode}
          />
        </Col>
        <Col md={4} lg={3} xl={2}>
          <Input
            id="registration_date"
            label="Data Cadastro"
            mask="99/99/9999 99:99:99"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.registration_date}
            isValid={
              formik.touched.registration_date &&
              !formik.errors.registration_date
            }
            errorMessage={formik.errors.registration_date}
            disabled
          />
        </Col>
        <Col md={3} lg={3} xl={3}>
          <Input
            id="store"
            label="Loja Cadastro"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.store}
            isValid={formik.touched.store && !formik.errors.store}
            errorMessage={formik.errors.store}
            disabled
          />
        </Col>
      </Row>
      <RightDiv>
        <Button
          hidden={viewMode}
          type="button"
          variant="danger"
          onClick={() => { navigate("/client") }}
        >
          Cancelar
        </Button>
        <Button hidden={viewMode} type="submit">{inputLabel}</Button>
      </RightDiv>

    </Form>
  </Container>
}

export { CreateClient }
