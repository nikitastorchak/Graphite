import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../store";
import styled from "styled-components";
import Cookies from "js-cookie";

import ProductActions from "../../store/actions/productActions";
import Cards from "../../common/Cards/Cards";
import { Product } from "../../types/products";

const Cart: FC = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.products);
  const { userData } = useSelector((state) => state.user);

  const [productsInCart, setProductsInCart] = useState<Product[]>([]);

  useEffect(() => {
    getCart();
  }, []);

  const getLocalCart = () => {
    try {
      return JSON.parse(Cookies.get("cart") || "[]");
    } catch (e: any) {
      console.log(e.message);
      return [];
    }
  };
  // localCart: getLocalCart(),
  const getCart = useCallback(async () => {
    if (userData._id) {
      await dispatch(ProductActions.getCart({ userId: userData._id }));
    } else {
      await dispatch(ProductActions.getLocalCart(getLocalCart()));
    }
  }, []);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <Title>Корзина</Title>
          <Cards products={productsInCart} />
        </>
      ) : (
        <Title>Корзина пуста</Title>
      )}
    </>
  );
};

export default Cart;

const Title = styled.h2`
  font-weight: bold;
  color: #fff;
  margin: 0;
`;
const ProductId = styled.p`
  font-weight: bold;
  color: #fff;
`;
