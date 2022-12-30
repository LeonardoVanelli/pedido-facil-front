import { Form } from "react-bootstrap"
import styled from "styled-components"

interface IFormLabelProps {
  variant: "login" | "form"
}
export const FormLabel = styled(Form.Label)<IFormLabelProps>`
  ${props => !props.variant || props.variant === "form"
    ? "color: var(--primary-5)"
    : ""}
`
