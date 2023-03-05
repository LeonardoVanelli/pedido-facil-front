import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 0;
  width: 100%;
  min-width: 30vw;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  border: 1px solid var(--gray-3);
  border-radius: 5px;

  > div {
    display: flex;
  }
`

interface ITabInfoProps {
  minWidth?: string | undefined
  maxWidth?: string | undefined
}

export const TabInfo = styled.div<ITabInfoProps>`
  display: flex;
  flex: 1;  
  width: 100%;
  justify-content: space-around;
  margin: 20px 0;
  align-items: center;  
  min-width: ${prop => prop.minWidth ? prop.minWidth + "px" : "auto"} ;
  max-width: ${prop => prop.maxWidth ? prop.maxWidth + "px" : "auto"} ;  
  

  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      > span {
        font-size: 18px;
        font-weight: 800;
      }

      .form-check {
        margin-top: 10px;
      }
    }
  }
`

export const Divisor = styled.div`  
  background-color: var(--gray-3);  
  margin: 20px 0;
  width: 1px;
`

interface ILabelInfoProps {
  color: "red" | "blue"
}
export const LabelInfo = styled.label<ILabelInfoProps>`
  color: ${prop => prop.color === "blue"
    ? "var(--primary-5)"
    : "var(--cancel)"
};
`

export const OrderAmount = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  span {
    font-size: 23px !important;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 15px;
`
