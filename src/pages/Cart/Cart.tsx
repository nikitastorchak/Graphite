import { useDispatch } from "../../store";

import styled from "styled-components";

const Title = styled.h2`
  font-style: bold;
  color: #fff;
  margin: 0;
`;
const ProductId = styled.p`
  font-style: bold;
  color: #fff;
`;

const Cart = () => {
  const orders = JSON.parse(localStorage.getItem("cart") || "[]");
  const dispatch = useDispatch();
  return (
    <>
      {orders.length > 0 ? (
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
