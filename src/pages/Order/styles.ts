import styled from "styled-components"

export const Container = styled.div`
  margin: 20px 50px;

  * {
    font-size: 14px;
  }
`

export const OrderTabs = styled.div`
  display: flex;
  align-items: center;
`

interface IOrderTabProps {
  enabled?: boolean
}

export const OrderTabLine = styled.div<IOrderTabProps>`
  width: 100%;
  height: 1px;
  background-color: ${props =>
    props.enabled === undefined ||
    props.enabled
      ? "var(--primary-4)"
      : "var(--gray-3)"
};
`

export const OrderTab = styled.div<IOrderTabProps>`
  margin: 0 20px;
  display: flex;
  gap: 12px;

  > span {
    background-color: ${props =>
    props.enabled === undefined ||
    props.enabled
      ? "var(--primary-4)"
      : "var(--gray-3)"
}
  }
  > label {
    color: ${props =>
    props.enabled === undefined ||
    props.enabled
      ? "var(--primary-4)"
      : "var(--gray-3)"
}
  }
`

export const OrderTabCircle = styled.span`
  background-color: var(--primary-4);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

export const OrderTabLabel = styled.label`
  white-space: nowrap;
  color: var(--primary-4);
`
