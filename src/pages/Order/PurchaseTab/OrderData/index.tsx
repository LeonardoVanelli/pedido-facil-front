import { useFormik } from "formik"
import { Col, Form, Row } from "react-bootstrap"
import { Input } from "../../../../components/Input"
import { Container } from "./styles"

function OrderData() {
  const formik = useFormik({
    initialValues: {
      clientDocument: "",
      clientName: "",
      clientCode: "",
      sellerName: "",
      sellerCode: "",
      date: "",
      ticket: ""
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
      <Row md={6}>
        <Col md={2} lg={2} xl={2}>
          <Input
            id="clientDocument"
            label="CPF"
            onChange={formik.handleChange}
            value={formik.values.clientDocument}
            isValid={
              formik.touched.clientDocument &&
              !formik.errors.clientDocument
            }
            errorMessage={formik.errors.clientDocument}
          />
        </Col>

        <Col md={4} lg={4} xl={4}>
          <Input
            id="clientName"
            label="Nome do Cliente"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.clientName}
            isValid={formik.touched.clientName && !formik.errors.clientName}
            errorMessage={formik.errors.clientName}
          />
        </Col>

        <Col md={3} lg={2} xl={2}>
          <Input
            id="clientCode"
            label="Código do Cliente"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.clientCode}
            isValid={formik.touched.clientCode && !formik.errors.clientCode}
            errorMessage={formik.errors.clientCode}
          />
        </Col>
      </Row>
      <Row md={6}>
        <Col md={3} lg={2} xl={2}>
          <Input
            id="sellerName"
            label="Nome do vendedor"
            onChange={formik.handleChange}
            value={formik.values.sellerName}
            isValid={formik.touched.sellerName && !formik.errors.sellerName}
            errorMessage={formik.errors.sellerName}
          />
        </Col>

        <Col md={4} lg={4} xl={4}>
          <Input
            id="sellerCode"
            label="Nome do Cliente"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.sellerCode}
            isValid={formik.touched.sellerCode && !formik.errors.sellerCode}
            errorMessage={formik.errors.sellerCode}
          />
        </Col>

        <Col md={3} lg={2} xl={2}>
          <Input
            id="date"
            label="Código do Cliente"
            type="date"
            placeholder="Digite Aqui"
            onChange={formik.handleChange}
            value={formik.values.date}
            isValid={formik.touched.date && !formik.errors.date}
            errorMessage={formik.errors.date}
          />
        </Col>
      </Row>

    </Form>
  </Container>
}

export { OrderData }
