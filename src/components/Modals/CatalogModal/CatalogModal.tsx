import Icon from "../../../common/Icon/Icon";

import { useSelector } from "../../../store";

import {
  CategoryBlock,
  ModalContent,
  ModalExit,
  ModalTitle,
  ModalTitleWrap,
  ModalWrap,
} from "./CatalogModalStyles";

const CatalogModal = ({ isCatalogActive, setIsCatalogActive }: any) => {
  const { categories } = useSelector((state) => state.products);

  const catalogHandler = (value: boolean) => {
    setIsCatalogActive(value);
  };

  return (
    <ModalWrap show={isCatalogActive}>
      <ModalTitleWrap>
        <ModalTitle>Категории</ModalTitle>
        <ModalExit onClick={() => catalogHandler(false)}>
          <Icon name="exit" />
        </ModalExit>
      </ModalTitleWrap>

      <ModalContent>
        {categories.map((category, index) => (
          <CategoryBlock key={`categoryBlock-${index}`}>
            {category.name}
          </CategoryBlock>
        ))}
      </ModalContent>
    </ModalWrap>
  );
};

export default CatalogModal;
