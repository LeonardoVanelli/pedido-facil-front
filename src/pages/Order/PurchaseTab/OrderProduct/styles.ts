import styled from "styled-components"

export const Container = styled.div`
  margin-top: 10px;
`

export const TableHead = styled.thead`
  color: var(--primary-5);
`

export const TableContent = styled.div`
  max-height: 190px;
  overflow-y: scroll;
  padding-right: 15px;
  /* overflow-x: hidden; */

  ::-webkit-scrollbar {
    width: 6px;
  }

/* Track */
::-webkit-scrollbar-track {
  background: #d9d9d9;
  border-radius: 20px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--primary-2);
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: purple;
}
`
