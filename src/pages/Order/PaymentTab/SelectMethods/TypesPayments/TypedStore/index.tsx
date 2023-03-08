import { useFormik } from "formik"
import { useEffect } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { Input } from "../../../../../../components/Input"
import { InputSelect, IOptions } from "../../../../../../components/InputSelect"
import { useOrder } from "../../../../hooks/useCarts"
import { findEnabled } from "./inputDisabled"

import { Container, ColButtons } from "./styles"

interface IProps {
  methodPaymentOptions: IOptions[]
  typePaymentOptions: IOptions[]
  cardAdministratorOptions: IOptions[]
}

const initialValues = {
  type_typing: "$$",
  instalments: "",
  expiration_date: "",
  value: "",
  title_number: "",
  card_approval_number: "",
  instalments_card: "",
  bank: "",
  agency: "",
  current_account: "",
  administrator_code: "",
  store_code: "",
  type: "",
  order_id: "",
  currency: "",
  approval: ""
}

function TypedStore({
  methodPaymentOptions,
  typePaymentOptions,
  cardAdministratorOptions
}: IProps) {
  const { sale } = useOrder()

  const formik = useFormik({
    initialValues,
    onSubmit: (value) => {
      console.log(value)
    }
  })

  useEffect(() => {
    formik.setFieldValue("expiration_date",
      new Date(sale.date).toISOString().split("T")[0]
    )

    formik.setFieldValue("value", sale.sale_price)
  }, [sale]) // eslint-disable-line react-hooks/exhaustive-deps

  function findEnabledInput(inputId: string): boolean {
    return findEnabled(formik.values.type, inputId)
  }

  return <Container>
    <Form
      onSubmit={formik.handleSubmit}
      validated={formik.isValidating && formik.isValid}
    >
      <Row>
        <Col md={3} lg={3} xl={3}>
          <InputSelect
            id="type_typing"
            options={methodPaymentOptions}
            value={formik.values.type_typing}
            setFieldValue={async (field, value) => {
              await formik.setFieldValue(field, value)
            }}
            label="Forma de pagamento"
          />
        </Col>
        <Col md={3} lg={3} xl={3}>
          <InputSelect
            id="type"
            label="Tipo de pagamento"
            options={typePaymentOptions}
            setFieldValue={async (field, value) => {
              await formik.setFieldValue(field, value)
            }}
            value={formik.values.type}
            isValid={
              formik.touched.type &&
              !formik.errors.type
            }
            errorMessage={formik.errors.type}
          />
        </Col>
        <Col md={2} lg={2} xl={2}>
          <Input
            id="expiration_date"
            label="Vencimento"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.expiration_date}
            isValid={
              formik.touched.expiration_date &&
              !formik.errors.expiration_date
            }
            errorMessage={formik.errors.expiration_date}
            disabled={findEnabledInput("expiration_date")}
          />
        </Col>
        <Col md={1} lg={1} xl={1}>
          <Input
            id="value"
            label="Valor parcela"
            onChange={formik.handleChange}
            value={formik.values.value}
            isValid={
              formik.touched.value &&
              !formik.errors.value
            }
            errorMessage={formik.errors.value}
            disabled={findEnabledInput("value")}
          />
        </Col>
        <Col md={1} lg={1} xl={1}>
          <Input
            id="instalments"
            label="Parcela"
            onChange={formik.handleChange}
            value={formik.values.instalments}
            isValid={
              formik.touched.instalments &&
              !formik.errors.instalments
            }
            errorMessage={formik.errors.instalments}
            disabled={findEnabledInput("instalments")}
          />
        </Col>
        <Col md={2} lg={2} xl={2}>
          <InputSelect
            id="administradora"
            label="Administradora"
            options={cardAdministratorOptions}
            setFieldValue={async (field, value) => {
              await formik.setFieldValue(field, value)
            }}
            value={formik.values.administrator_code}
            isValid={
              formik.touched.administrator_code &&
              !formik.errors.administrator_code
            }
            errorMessage={formik.errors.administrator_code}
            disabled={findEnabledInput("administrator_code")}
          />
        </Col>
      </Row>
      <Row>
        <Col md={2} lg={2} xl={2}>
          <Input
            id="title_number"
            label="Titulo (doc)"
            onChange={formik.handleChange}
            value={formik.values.title_number}
            isValid={
              formik.touched.title_number &&
              !formik.errors.title_number
            }
            errorMessage={formik.errors.title_number}
            disabled={findEnabledInput("title_number")}
          />
        </Col>
        <Col md={2} lg={2} xl={2}>
          <Input
            id="bank"
            label="Banco"
            onChange={formik.handleChange}
            value={formik.values.bank}
            isValid={
              formik.touched.bank &&
              !formik.errors.bank
            }
            errorMessage={formik.errors.bank}
            disabled={findEnabledInput("bank")}
          />
        </Col>
        <Col md={2} lg={2} xl={2}>
          <Input
            id="agency"
            label="Agencia"
            onChange={formik.handleChange}
            value={formik.values.agency}
            isValid={
              formik.touched.agency &&
              !formik.errors.agency
            }
            errorMessage={formik.errors.agency}
            disabled={findEnabledInput("agency")}
          />
        </Col>
        <Col md={2} lg={2} xl={2}>
          <Input
            id="current_account"
            label="Conta Corrente"
            mask={"99999-9"}
            onChange={formik.handleChange}
            value={formik.values.current_account}
            isValid={
              formik.touched.current_account &&
              !formik.errors.current_account
            }
            errorMessage={formik.errors.current_account}
            disabled={findEnabledInput("current_account")}
          />
        </Col>
        <Col md={2} lg={2} xl={2}>
          <Input
            id="approval"
            label="Autorização"
            onChange={formik.handleChange}
            value={formik.values.approval}
            isValid={
              formik.touched.approval &&
              !formik.errors.approval
            }
            errorMessage={formik.errors.approval}
            disabled={findEnabledInput("approval")}
          />
        </Col>
        <ColButtons md={1} lg={1} xl={1}>
          <Button
            variant="outline-primary"
            size="lg"
            type="button"
          >
        Limpar
          </Button>
        </ColButtons>
        <ColButtons md={1} lg={1} xl={1}>
          <Button
            size="lg"
            type="submit"
          >
        Adicionar
          </Button>
        </ColButtons>
      </Row>
    </Form>
  </Container>
}

export { TypedStore }
