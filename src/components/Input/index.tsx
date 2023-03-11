import { ChangeEventHandler } from "react"
import { Form, InputGroup } from "react-bootstrap"
import { FormLabel, InputGroupText } from "./styles"
import InputMask from "react-input-mask"
import { BiSearch } from "react-icons/bi"

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
  onClickSearch?: () => void
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
  onKeyUp,
  onClickSearch
}: IProps) {
  const as = mask ? InputMask : undefined

  return (
    <Form.Group className="mb-3" controlId={id}>
      <FormLabel variant={variant}>{label}</FormLabel>
      <InputGroup>
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

        { onClickSearch && (
          <InputGroupText
            onClick={onClickSearch}
          >
            <BiSearch />
          </InputGroupText>
        )}

        {errorMessage && (
          <Form.Control.Feedback type="invalid">
            {errorMessage}
          </Form.Control.Feedback>
        )}
      </InputGroup>

    </Form.Group>)
}

export { Input }
