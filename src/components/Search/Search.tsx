import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch } from "../../store";

import SearchModal from "../Modals/SearchModal/SearchModal";
import CatalogModal from "../Modals/CatalogModal/CatalogModal";
import {
  CatalogWrap,
  IconsWrap,
  SearchField,
  SearchWrap,
  Wrapper,
} from "./SearchStyles";
import { ModalExit } from "../Modals/SearchModal/SearchModalStyles";

import { searchProducts } from "../../store/actions/productActions";

import Icon from "../../common/Icon/Icon";

const Search = () => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [products, setProducts] = useState<any>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isCatalogActive, setIsCatalogActive] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    searchValue.length > 0
      ? searchModalHandler(true)
      : searchModalHandler(false);
  }, [searchValue]);

  const searchModalHandler = (value: boolean) => setIsSearchActive(value);
  const searchValueHandler = (value: string) => setSearchValue(value);
  const catalogModalHandler = (value: boolean) => setIsCatalogActive(value);

  const searchHandler = async (value: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value.target.value);
    const searchResult = await dispatch(
      searchProducts({ name: value.target.value })
    );
    setProducts(searchResult);
  };

  return (
    <Wrapper show={isSearchActive}>
      <SearchWrap>
        <Icon name="find" color="#000" />
        <SearchField
          placeholder="Искать на Graphite"
          value={searchValue}
          onChange={searchHandler}
        />
      </SearchWrap>
      <IconsWrap>
        {searchValue ? (
          <ModalExit onClick={() => searchValueHandler("")}>
            <Icon name="exit" color="#fff" />
          </ModalExit>
        ) : (
          <>
            <CatalogWrap onClick={() => catalogModalHandler(true)}>
              <Icon name="catalog" color="#fff" />
            </CatalogWrap>
            <Icon name="faq" color="#fff" />
          </>
        )}
      </IconsWrap>
      <CatalogModal
        isCatalogActive={isCatalogActive}
        setIsCatalogActive={setIsCatalogActive}
      />
      <SearchModal isSearchActive={isSearchActive} products={products} />
    </Wrapper>
  );
};

export default Search;
