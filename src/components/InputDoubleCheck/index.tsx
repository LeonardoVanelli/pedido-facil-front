/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "react-bootstrap"
import { FormLabel, FormCheckGroup } from "./styles"

interface IProps {
  id: string
  label: string
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => any
  value: string | number | string[] | undefined
  errorMessage: string | undefined
}

function InputDoubleCheck ({
  id,
  label,
  setFieldValue,
  value,
  errorMessage
}: IProps) {
  return (
    <Form.Group controlId={id}>
      <FormLabel>{label}</FormLabel>
      <FormCheckGroup>
        <Form.Check
          type="radio"
          name="saleType-sale"
          value="sale"
          checked={value === "sale"}
          id="saleType-sale"
          label="Venda"
          onChange={() => setFieldValue(id, "sale")}
        />

        <Form.Check
          type="radio"
          name="saleType-exchange"
          value="exchange"
          checked={value === "exchange"}
          id="saleType-exchange"
          label="Troca"
          onChange={() => setFieldValue(id, "exchange")}
        />
      </FormCheckGroup>
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>)
}

export { InputDoubleCheck }
