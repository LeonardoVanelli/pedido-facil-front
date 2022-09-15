import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  height: calc(100vh - 56px);
  align-items: center;
  justify-content: center;
`

export const ImageContainer = styled.div`  
    max-width:300px;    
    width: auto;
    height: auto;

    margin-bottom: 4%;
    margin-top: -50px;
`

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4.25rem;
`

export const ItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
