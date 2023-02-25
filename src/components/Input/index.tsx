import { ChangeEventHandler } from "react"
import { Form } from "react-bootstrap"
import { FormLabel } from "./styles"
import InputMask from "react-input-mask"

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
  mask?: string | Array<string | RegExp>
  disabled?: boolean
  onBlur?: () => void
  onKeyUp?: (e: React.KeyboardEvent) => void
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
  variant,
  mask,
  disabled,
  onBlur,
  onKeyUp
}: IProps) {
  const as = mask ? InputMask : undefined

  return (
    <Form.Group className="mb-3" controlId={id}>
      <FormLabel variant={variant}>{label}</FormLabel>
      <Form.Control
        as={as}
        type={type}
        mask={mask ?? ""}
        placeholder={placeholder ?? "Digite Aqui"}
        onChange={onChange}
        isValid={isValid}
        isInvalid={!!errorMessage}
        value={value}
        disabled={disabled}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
      />
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>)
}

export { Input }
