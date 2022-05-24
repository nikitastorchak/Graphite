import { useEffect, useState } from "react";
import styled from "styled-components";

import Loading from "../../common/Loading/Loading";
import Cards from "../../common/Cards/Cards";
import ProductsByCategories from "../../components/ProductsByCategories/ProductsByCategories";
import Banner from "../../common/Banner/Banner";

import { useDispatch } from "../../store";
import {
  getProductsForMainPage,
  getResourcesAction,
} from "../../store/actions/productActions";
import Icon from "../../common/Icon/Icon";

const Wrapper = styled.div`
  padding: 15px;
`;

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productsByCategory, setProductsByCategory] = useState<any>([]);
  const dispatch = useDispatch();

  const getProducts = async () => {
    setIsLoading(true);
    const response: any = await dispatch(getProductsForMainPage());
    await dispatch(getResourcesAction());
    setProductsByCategory(response?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {!isLoading ? (
        <Wrapper>
          <Icon name={"test"} />
          <Banner />
          <Cards />
          <ProductsByCategories productsByCategory={productsByCategory} />
        </Wrapper>
      ) : (
        <Loading />
      )}
    </>
  );
};

//   //Todo посмотреть правило еслинта для зависимостей

export default Main;
