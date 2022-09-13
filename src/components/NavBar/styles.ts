import { Nav } from "react-bootstrap"
import styled from "styled-components"

export const NavSearch = styled(Nav)`
  display: flex;
  flex-direction: row;

  input {
    font-size: 0.9rem;
    width: 215px;
  }

  button {
    margin-left: 8px;
    border: 1px solid white;
  }

  button:hover {
    border: 1px solid white
  }
`
