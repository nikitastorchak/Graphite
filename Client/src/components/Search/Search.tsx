import { useEffect, useState } from "react";
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

import { ReactComponent as Catalog } from "../../images/Catalog.svg";
import { ReactComponent as FindIcon } from "../../images/FindIcon.svg";
import { ReactComponent as FAQ } from "../../images/FAQ.svg";
import { ReactComponent as Exit } from "../../images/Exit.svg";

interface FoundProducts {}
interface FoundCategories {}

const Search = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [products, setProducts] = useState<any>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isCatalogActive, setIsCatalogActive] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    searchValue.length > 0 ? setIsSearchActive(true) : setIsSearchActive(false);
  }, [searchValue]);

  const searchHandler = async (value: any) => {
    setSearchValue(value.target.value);
    const searchResult = await dispatch(
      searchProducts({ name: value.target.value })
    );
    setProducts(searchResult);
  };

  return (
    <Wrapper show={isSearchActive}>
      <SearchWrap>
        <FindIcon />
        <SearchField
          placeholder="Искать на Graphite"
          value={searchValue}
          onChange={searchHandler}
        />
      </SearchWrap>
      <IconsWrap>
        {searchValue ? (
          <ModalExit
            onClick={() => {
              setSearchValue("");
            }}
          >
            <Exit />
          </ModalExit>
        ) : (
          <>
            <CatalogWrap
              onClick={() => {
                setIsCatalogActive(true);
              }}
            >
              <Catalog />
            </CatalogWrap>
            <FAQ />
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
