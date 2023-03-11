import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 0;
  width: 100%;
  min-width: 30vw;
`

export const TableContent = styled.div`
  max-height: 20vh;
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

export const TableHead = styled.thead`
  color: var(--primary-5);
`
