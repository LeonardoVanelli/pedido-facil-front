import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  display: inline-block;
  

  &:hover{
    > div {
      display: block;
    }
  }
`

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-image: linear-gradient(135.77deg, 
    rgba(13, 110, 253, 0.4) 17.46%, 
    rgba(13, 110, 253, 0.1) 75.34%
  );
  backdrop-filter: blur(20px);
  margin-top: -25px;
  margin-left: -25px;

  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 0;
  z-index: 1;
  border-radius: 8px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
      width: 100%;
      
      cursor: pointer;
      color: var(--primary-5);
      text-align: center;

      &:hover {
        background-color: rgba(13, 110, 253, 0.4);
      }
    } 
  }
`
