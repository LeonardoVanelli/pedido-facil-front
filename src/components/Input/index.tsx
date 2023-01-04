import { ChangeEventHandler } from "react"
import { Form } from "react-bootstrap"
import { FormLabel } from "./styles"

interface IProps {
  id: string
  label: string
  onChange?: ChangeEventHandler
  isValid?: boolean
  value: string | number | string[] | undefined
  type?: string
  errorMessage?: string | undefined
  placeholder?: string | undefined
  variant?: "login" | "form"
}

function Input ({
  id,
  label,
  onChange,
  isValid,
  value,
  type,
  errorMessage,
  placeholder,
  variant
}: IProps) {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <FormLabel variant={variant}>{label}</FormLabel>
      <Form.Control
        type={type}
        id={id}
        placeholder={placeholder ?? "Digite Aqui"}
        onChange={onChange}
        isValid={isValid}
        isInvalid={!!errorMessage}
        value={value}
      />
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>)
}

export { Input }
