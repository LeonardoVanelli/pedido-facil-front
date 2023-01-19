import { Container as ContainerRB, Row } from "react-bootstrap"
import styled from "styled-components"

export const Container = styled(ContainerRB)`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
`

export const SessionTitle = styled(Row)`
  color: var(--primary-5);
  font-weight: bold;
  font-size: 20px;

  padding-bottom: 10px;
`
