import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const PaymentType = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray-3);
  border-radius: 5px;
  width: 100%;
  height: 135px;
    
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  cursor: pointer;

  &:hover {
    background-color: var(--gray-2);
  }

  > svg {
    height: 50px;
    width: 50px;

    color: var(--primary-5);
    font-weight: 600;
  }
`

export const Label = styled.span`
  font-size: 1.063rem;
  font-weight: 700;
  color: var(--primary-5);
`
