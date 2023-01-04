import { InputGroup } from "react-bootstrap"
import styled from "styled-components"

export const Container = styled.div``

export const HeaderContainer = styled.div`
  display: flex;  
  flex-direction: row;
  justify-content: space-between;

  button {
    white-space: nowrap;
    min-width: 190px;

    height: 48px;
  }
`

export const InputGroupTable = styled(InputGroup)`
  min-width: 500px;
  white-space: nowrap;
  width: auto;
  margin-bottom: 0 !important;

  span {
    background-color: transparent;
    border-right: none;
  }

  input {
    border-left: none;
    padding-left: 0;

    ::placeholder { 
      color: var(--gray-3);
      opacity: 1; /* Firefox */
    }
  }
`

export const PaginationContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`
