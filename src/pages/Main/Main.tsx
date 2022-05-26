import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "../../store";

import Loading from "../../common/Loading/Loading";
import ProductsByCategories from "../../components/ProductsByCategories/ProductsByCategories";
import Banner from "../../common/Banner/Banner";

import { getResourcesForMainPage } from "../../store/actions/productActions";
import NewProducts from "../../components/NewProducts/NewProducts";

const Wrapper = styled.div`
  padding: 15px;
`;

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productsByCategory, setProductsByCategory] = useState<any>([]);
  const [newProducts, setNewProducts] = useState<any>([]);
  const dispatch = useDispatch();

  const getProducts = async () => {
    setIsLoading(true);
    const response: any = await dispatch(getResourcesForMainPage());
    setProductsByCategory(response?.productsByCategories.data);
    setNewProducts(response?.newProducts.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Banner />
          <NewProducts newProducts={newProducts} />
          <ProductsByCategories productsByCategory={productsByCategory} />
        </Wrapper>
      )}
    </>
  );
};

//Todo посмотреть правило еслинта для зависимостей

export default Main;
