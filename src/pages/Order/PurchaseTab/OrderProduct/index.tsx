import { useFormik } from "formik"
import { useState } from "react"
import { Col, Form, Row, Table } from "react-bootstrap"
import { ImCancelCircle } from "react-icons/im"
import AlertConfirm from "react-alert-confirm"

import { Input } from "../../../../components/Input"
import { InputDoubleCheck } from "../../../../components/InputDoubleCheck"
import { listProductService } from "../../../../services"
import { IListProductService }
  from "../../../../services/interfaces/IListProductService"
import { IResponsePagination }
  from "../../../../services/interfaces/IResponsePagination"
import { IProductAdd, useOrder } from "../../hooks/useCarts"
import { ListProductModal } from "./ListProductModal"
import { ProductTr } from "./ListProductModal/styles"
import { Container, TableContent, TableHead } from "./styles"

function OrderProduct() {
  const [showModal, setShowModal] = useState(false)
  const [productsPaginate, setProductsPaginate] =
  useState<IResponsePagination<IListProductService>>(
    {
      current_page: 0,
      data: [],
      from: 0,
      last_page: 0,
      per_page: 15,
      to: 0,
      total: 0,
      next_page: 0,
      prev_page: 0
    }
  )

  const { addProduct, removeProduct, products } = useOrder()

  const listProduct = async (
    perPage: number,
    page: number
  ): Promise<IListProductService[]> => {
    const { product_code } = formik.values
    const response =
    await listProductService.execute(product_code, perPage, page)

    setProductsPaginate(response)

    return response.data
  }

  const formik = useFormik({
    initialValues: {
      sale_type: "sale",
      product_code: "",
      quantity: "1"
    },
    onSubmit: async values => {
      const productList = await listProduct(10, 1)

      if (productList.length === 1) {
        const {
          barcode,
          code,
          description,
          price,
          price_net,
          size,
          style
        } = productList[0]
        addProductMiddleware({
          barcode,
          code,
          description,
          price,
          discount: 0,
          quantity: Number(formik.values.quantity),
          priceNet: price_net,
          size,
          style
        })
      } else {
        setShowModal(true)
      }
    }
  })

  const addProductMiddleware = ({
    barcode,
    code,
    description,
    discount,
    price,
    priceNet,
    size,
    style
  }: IProductAdd) => {
    const exchange = formik.values.sale_type === "exchange"

    addProduct({
      barcode,
      code,
      description,
      discount,
      price,
      priceNet,
      quantity: Number(formik.values.quantity),
      size,
      style,
      exchange
    })

    setShowModal(false)
    formik.setFieldValue("quantity", "1")
    formik.setFieldValue("product_code", "")
  }

  const removeProductMiddleware = async (productId: number) => {
    const [isOk] = await AlertConfirm({
      title: "Deseja cancelar o produto?",
      okText: "Sim",
      cancelText: "Não"
    })
    if (isOk) {
      removeProduct(productId)
    }
  }

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
            onKeyUp={e => {
              if (e.key === "Enter") { formik.handleSubmit() }
            }}
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
            <th>Valor Liquido</th>
            <th>Ações</th>
          </tr>
        </TableHead>
        <tbody>
          {products.map(prod => (
            <ProductTr
              key={prod.id}
              canceled={prod.canceled}
              exchange={prod.exchange}
            >
              <td>{prod.id}</td>
              <td>{prod.code}</td>
              <td>{prod.style}</td>
              <td>{prod.barcode}</td>
              <td>{prod.description}</td>
              <td>{prod.quantity}</td>
              <td>{prod.price}</td>
              <td>0,00</td>
              <td>{prod.priceNet}</td>
              <td>{prod.valueNet}</td>
              <td>
                <div
                  onClick={() => { removeProductMiddleware(prod.id) }}
                  style={{ cursor: "pointer" }}
                  hidden={prod.canceled}
                >
                  <ImCancelCircle
                    color="FF0000"
                    size={18}
                  />
                </div>
              </td>
            </ProductTr>
          ))}
        </tbody>
      </Table>
    </TableContent>

    <ListProductModal
      onHideModal={() => setShowModal(false)}
      showModal={showModal}
      products={productsPaginate.data}
      currentPage={productsPaginate.current_page ?? 0}
      lastPage={productsPaginate.last_page ?? 0}
      onChangePage={async (perPage, page) => {
        await listProduct(perPage, page)
      }}
      handleSelectProduct={addProductMiddleware}
    />
  </Container>
}

export { OrderProduct }
