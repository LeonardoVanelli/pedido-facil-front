import { useFormik } from "formik"
import { Col, Form, Row, Table } from "react-bootstrap"
import { ImCancelCircle } from "react-icons/im"

import { Input } from "../../../../components/Input"
import { InputDoubleCheck } from "../../../../components/InputDoubleCheck"
import { Container, TableContent, TableHead } from "./styles"

function OrderProduct() {
  const formik = useFormik({
    initialValues: {
      sale_type: "sale",
      product_code: "",
      quantity: ""
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
        <Col md={3} lg={3} xl={2}>
          <Input
            id="product_code"
            label="Código de Barra/Produto"
            onChange={formik.handleChange}
            value={formik.values.product_code}
            isValid={
              formik.touched.product_code &&
              !formik.errors.product_code
            }
            errorMessage={formik.errors.product_code}
          />
        </Col>

        <Col md={2} lg={1} xl={1} >
          <Input
            id="quantity"
            label="Quantidade"
            type="number"
            placeholder=""
            onChange={formik.handleChange}
            value={formik.values.quantity}
            isValid={formik.touched.quantity && !formik.errors.quantity}
            errorMessage={formik.errors.quantity}
          />
        </Col>

        <Col md={3} lg={2} xl={2}>
          <InputDoubleCheck
            id="sale_type"
            errorMessage={formik.errors.sale_type}
            label="Tipo"
            setFieldValue={formik.setFieldValue}
            value={formik.values.sale_type}
          />
        </Col>
      </Row>
    </Form>
    <TableContent>
      <Table hover>
        <TableHead>
          <tr>
            <th>Item</th>
            <th>Produto</th>
            <th>Cor</th>
            <th>Barra</th>
            <th>Descrição</th>
            <th>Qtde</th>
            <th>Preço</th>
            <th>Desconto</th>
            <th>Preço Liquido</th>
            <th>Preço Bruto</th>
            <th>Ações</th>
          </tr>
        </TableHead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7].map(t => (
            <tr key={t}>
              <td>1</td>
              <td>CMG1</td>
              <td>1111</td>
              <td>23569874584125</td>
              <td>Camiseta Masc Poliester Azul - G</td>
              <td>1</td>
              <td>59,99</td>
              <td>0,00</td>
              <td>59,99</td>
              <td>59,99</td>
              <td>
                <ImCancelCircle color="FF0000" size={18}/>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContent>
  </Container>
}

export { OrderProduct }
