import React from "react";
import { useDispatch } from "../../../store";
import { push } from "connected-react-router";
import {
  CategoryButton,
  CategoryWrapper,
  ModalContent,
  ModalWrap,
  ProductName,
  ProductWrapper,
} from "./SearchModalStyles";

const SearchModal = ({ products, isSearchActive }: any) => {
  const dispatch = useDispatch();

  const changeLocation = (path: string) => {
    dispatch(push(`/${path}`));
  };

  return (
    <ModalWrap show={isSearchActive}>
      <ModalContent>
        {products[0]?.items.length > 0 || products[1]?.items.length > 0 ? (
          <>
            {products.map((item: any) => (
              <CategoryWrapper>
                {item.items.map((element: any) =>
                  item.type === "categories" ? (
                    <CategoryButton onClick={() => changeLocation("404")}>
                      {element.name}
                    </CategoryButton>
                  ) : (
                    <ProductWrapper>
                      <ProductName onClick={() => changeLocation("404")}>
                        {element.name}
                      </ProductName>
                      <span> {element.price}&thinsp;₽</span>
                    </ProductWrapper>
                  )
                )}
              </CategoryWrapper>
            ))}
          </>
        ) : (
          <p>Товаров не найдено :(</p>
        )}
      </ModalContent>
    </ModalWrap>
  );
};

export default SearchModal;
