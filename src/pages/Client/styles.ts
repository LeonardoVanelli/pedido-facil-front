import { Container } from "react-bootstrap"
import styled from "styled-components"

export const Content = styled(Container)`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
`

export const TableHead = styled.thead`
  color: var(--primary-5);
`

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 30px;

  h1 {
    font-size: 30px;
    margin-bottom: 0;
    font-weight: bold;
    color: var(--primary-5)    
  }

  svg {
    font-size: 30px;
    color: var(--primary-5)    
  }
`
