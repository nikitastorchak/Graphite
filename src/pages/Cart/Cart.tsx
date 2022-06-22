import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "../../store";
import styled from "styled-components";
import Cookies from "js-cookie";

import ProductActions from "../../store/actions/productActions";

const Cart: FC = () => {
  const { cart } = useSelector((state) => state.products);
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    if (userData._id) {
      const localCart = JSON.parse(Cookies.get("cart") || "[]");
      await dispatch(
        ProductActions.getCart({ userId: userData._id, localCart })
      );
    } else {
      const userCart = JSON.parse(Cookies.get("cart") || "[]");
      await dispatch(ProductActions.getLocalCart(userCart));
    }
  };
  const dispatch = useDispatch();
  return (
    <>
      {cart.length > 0 ? (
        <>
          <Title>Корзина</Title>
          {cart.map((id: string) => (
            <ProductId>{id}</ProductId>
          ))}
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
