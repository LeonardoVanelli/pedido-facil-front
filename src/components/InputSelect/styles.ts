import { Form } from "react-bootstrap"
import styled from "styled-components"
import SelectRS from "react-select"

interface IFormLabelProps {
  variant: "login" | "form"
}
export const FormLabel = styled(Form.Label)<IFormLabelProps>`
  ${props => !props.variant || props.variant === "form"
    ? "color: var(--primary-5)"
    : ""}
`

export const Select = styled(SelectRS)`
  > div > div > div {
  
    overflow: hidden;
    white-space: nowrap;    
  }
`
