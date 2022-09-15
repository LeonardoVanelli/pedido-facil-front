import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    > div {
      background-color: #0b5ed7;
    }    
  }
`

export const ItemCircle = styled.div`
  background-color: var(--primary-5);
  border-radius: 50%;
  height: 6.5rem;
  width: 6.5rem;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg:last-child {
    font-weight: bold;
    color: white;
    height: 1.2rem;
    width: 1.2rem;
  }

  svg:first-child {
    color: white;
    height: 3.5rem;
    width: 3.5rem;
  }
`

export const ItemLabel = styled.span`
  font-weight: bold;
  color: var(--primary-5);
  text-align: center;

  max-width: 7rem;  
`
