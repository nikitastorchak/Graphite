import { useDispatch } from "../../store";

import styled from "styled-components";

const Title = styled.h2`
  font-style: bolder;
  color: #fff;
  margin: 0;
`;
const ProductId = styled.p`
  font-style: bolder;
  color: #fff;
`;

const Cart = () => {
  const orders = JSON.parse(localStorage.getItem("cart") || "[]");
  const dispatch = useDispatch();
  return (
    <>
      {orders ? (
        <>
          <Title>Корзина</Title>
          {orders.map((id: string) => (
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
