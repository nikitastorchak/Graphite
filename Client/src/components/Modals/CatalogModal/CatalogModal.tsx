import React from "react";
import { ReactComponent as Catalog } from "../../../images/Catalog.svg";
import { ReactComponent as FindIcon } from "../../../images/FindIcon.svg";
import { ReactComponent as Exit } from "../../../images/Exit.svg";
import styled from "styled-components";
import { useSelector } from "../../../store";
import { MAIN_COLOR } from "../../../constants/Colors";

interface ModalWrapProps {
  show: boolean;
}

export const ModalWrap = styled.div<ModalWrapProps>`
  position: fixed;
  background: #fff;
  display: flex;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
  margin-left: ${(props) => (props.show ? "0" : "-100%")};
  opacity: ${(props) => (props.show ? "1" : "0.8")};
  transition: 0.3s ease;
`;
export const ModalContent = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  overflow: scroll;
  pointer-events: all;
  height: 90%;
`;
export const CategoryBlock = styled.p`
  text-align: left;
  margin: 0;
  padding: 20px 0;
  border-bottom: 1px #ebebeb solid;
`;
export const ModalTitleWrap = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const ModalExit = styled.div`
  width: 50px;
  height: 50px;
  pointer-events: all;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  svg {
    height: 70%;
    fill: ${MAIN_COLOR};
  }
`;
export const ModalTitle = styled.h3`
  text-align: left;
  text-transform: uppercase;
  margin: 0;
  padding: 20px 0;
`;

const CatalogModal = ({ isCatalogActive, setIsCatalogActive }: any) => {
  const { categories } = useSelector((state) => state.products);
  return (
    <ModalWrap show={isCatalogActive}>
      <ModalTitleWrap>
        <ModalTitle>Категории</ModalTitle>
        <ModalExit onClick={() => setIsCatalogActive(false)}>
          <Exit />
        </ModalExit>
      </ModalTitleWrap>

      <ModalContent>
        {categories.map((category) => {
          return <CategoryBlock>{category.name}</CategoryBlock>;
        })}
      </ModalContent>
    </ModalWrap>
  );
};

export default CatalogModal;
