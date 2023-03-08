
import { useState, useEffect } from "react"
import { Form } from "react-bootstrap"
import { FormLabel, Select } from "./styles"

import "bootstrap/dist/css/bootstrap.css"

export interface IOptions {
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
  disabled?: boolean
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
  options,
  disabled
}: IProps) {
  const [selectedOption, setSelectedOption] = useState<IOptions>()

  useEffect(() => {
    const selected = options.find(option => option.value === value)
    if (selected !== selectedOption) { setSelectedOption(selected) }
  }, [value, selectedOption, options])

  const onChange = async (selectedValue: IOptions) => {
    if (setFieldValue) { await setFieldValue(id, selectedValue.value) }
    setSelectedOption(selectedValue)
  }

  return (
    <Form.Group className="mb-3" controlId={id} >
      <FormLabel variant={variant}>{label}</FormLabel>
      <Select
        type={type}
        as={Select}
        placeholder={placeholder ?? "Digite Aqui"}
        onChange={onChange}
        value={selectedOption}
        isValid={isValid}
        isInvalid={!!errorMessage}
        options={options}
        isDisabled={disabled}
      />
      <Form.Control.Feedback type="invalid">
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>)
}

export { InputSelect }
