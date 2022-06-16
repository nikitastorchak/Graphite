import { useDispatch } from "../../store";
import styled from "styled-components";

//TODO Fix Cart component logic

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

const Title = styled.h2`
  font-weight: bold;
  color: #fff;
  margin: 0;
`;
const ProductId = styled.p`
  font-weight: bold;
  color: #fff;
`;
