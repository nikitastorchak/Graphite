import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "../../store";

import { getMainResources, Product } from "../../services/ProductsHandlers";

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
  const [productsByCategory, setProductsByCategory] = useState<Product[]>([]);
  const [newProducts, setNewProducts] = useState<any>([]);
  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      const result = await getMainResources();
      console.log(result);
      setProductsByCategory(result.productsByCategories?.data);
      setNewProducts(result.newProducts?.data);
    } catch (e: any) {
      return e.message;
    }
  };

  const setProducts = async () => {
    setIsLoading(true);
    dispatch(getResourcesForMainPage());
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
    setProducts();
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
