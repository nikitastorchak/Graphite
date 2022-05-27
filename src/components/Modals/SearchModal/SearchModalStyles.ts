import styled from "styled-components";

interface ModalWrapProps {
  show: string;
}

export const ModalWrap = styled.div<ModalWrapProps>`
  position: fixed;
  background: #262434;
  display: flex;
  padding: 10px 0;
  left: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-radius: 0 0 5px 5px;
  height: auto;
  z-index: 1;
  min-height: ${(props) => (props.show ? "10" : "0")};
  top: ${(props) => (props.show ? "60px" : "50px")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: 0.1s linear;
`;
export const ModalContent = styled.div`
  background: transparent;
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  overflow: scroll;
  pointer-events: all;
  height: 90%;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const CategoryButton = styled.button`
  padding: 3px 5px;
  margin: 5px;
  font-size: 13px;
  border-radius: 10px;
  border: none;
  background-color: #8897ff;
  color: #fff;
`;
export const ProductWrapper = styled.a`
  text-align: left;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const ProductName = styled.span``;

export const ModalExit = styled.div`
  width: 50px;
  pointer-events: all;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  svg {
    height: 70%;
    fill: #fff;
  }
`;
