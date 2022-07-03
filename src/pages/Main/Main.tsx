import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "../../store";

import Loading from "../../common/Loading/Loading";
import ProductsByCategories from "../../components/ProductsByCategories/ProductsByCategories";
import Banner from "../../common/Banner/Banner";
import NewProducts from "../../components/NewProducts/NewProducts";

import ProductActions from "../../store/actions/productActions";

const Main = () => {
  const dispatch = useDispatch();
  const { newProducts, mainResources } = useSelector((state) => state.products);

  const getProducts = async () => {
    await dispatch(ProductActions.getMainResources());
    await dispatch(ProductActions.getResourcesForMainPage());
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {(newProducts.length || mainResources.length) === 0 ? (
        <Loading />
      ) : (
        <Wrapper>
          <Banner />
          <NewProducts newProducts={newProducts} />
          <ProductsByCategories productsByCategory={mainResources} />
        </Wrapper>
      )}
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  padding: 15px;
`;
