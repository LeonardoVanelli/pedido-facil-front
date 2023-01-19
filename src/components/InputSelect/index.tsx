
import { Form } from "react-bootstrap"
import { FormLabel, Select } from "./styles"

import "bootstrap/dist/css/bootstrap.css"

interface IOptions {
  value: string
  label: string
}

interface IProps {
  id: string
  label: string
  setFieldValue?: (field: string, value: string) => Promise<void>
  isValid?: boolean
  value: string | number | string[] | undefined
  type?: string
  errorMessage?: string | undefined
  placeholder?: string | undefined
  variant?: "login" | "form"
  options: IOptions[]
}

function InputSelect ({
  id,
  label,
  setFieldValue,
  isValid,
  value,
  type,
  errorMessage,
  placeholder,
  variant,
  options
}: IProps) {
  const onChange = async (selectedValue: IOptions) => {
    if (setFieldValue) { await setFieldValue(id, selectedValue.value) }
  }

  return (
    <Form.Group className="mb-3" controlId={id} >
      <FormLabel variant={variant}>{label}</FormLabel>
      <Select
        type={type}
        id={id}
        as={Select}
        placeholder={placeholder ?? "Digite Aqui"}
        onChange={onChange}
        isValid={isValid}
        isInvalid={!!errorMessage}
        options={options}
      />
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>)
}

export { InputSelect }
