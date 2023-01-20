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

interface IInputGroupTableProps {
  $clickEnterToSearch: boolean
}

export const InputGroupTable = styled(InputGroup)<IInputGroupTableProps>`
  min-width: 420px;
  white-space: nowrap;
  width: auto;  
  ${(props) => props.$clickEnterToSearch
    ? "margin-bottom: 0 !important;"
    : "margin-bottom: 1.5rem !important;"
}
  

  span {
    background-color: transparent;
    border-right: none;
  }

  input {
    border-left: none;
    padding-left: 0;
    padding-left: 8px;
    font-size: 1rem;

    ::placeholder { 
      color: var(--gray-3);
      opacity: 1; /* Firefox */
      font-size: 1rem;      
    }
  }
`

export const PaginationContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`
