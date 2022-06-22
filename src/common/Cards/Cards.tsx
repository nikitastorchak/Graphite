import { FC } from "react";
import styled from "styled-components";
import { useDispatch } from "../../store";
import { push } from "connected-react-router";
import { uniq } from "lodash";
import { Product } from "../../services/ProductsHandlers";
import Cookies from "js-cookie";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";

import {
  Card,
  CardName,
  Preview,
  PreviewWrap,
  Price,
  PriceWithDiscount,
  Wrapper,
} from "./CardsStyles";

interface CardsProps {
  products: Product[];
}

const Cards: FC<CardsProps> = ({ products }) => {
  const dispatch = useDispatch();
  const changeLocation = (url: string) => {
    dispatch(push(url));
  };

  const handleAddToCart = (id: string) => {
    const cart = JSON.parse(Cookies.get("cart") || "[]");
    cart.push(id);
    const uniqCart = uniq(cart);
    Cookies.set("cart", JSON.stringify(uniqCart), { expires: 14 });
    console.log(Cookies.get("cart"));
  };

  return (
    <Wrapper>
      {products?.map((product, index) => {
        const { name, priceWithDiscount, price, preview, _id } = product;
        return (
          <Card key={`card-${index}`}>
            <CardInfo onClick={() => changeLocation(`/product/${product._id}`)}>
              <PreviewWrap>
                {preview ? (
                  <Preview
                    src={`http://192.168.2.56:8000/media/${preview}`}
                    alt="Товар еще не имеет картинки :("
                  />
                ) : (
                  <Icon name="photo" size={40} color="#fff" />
                )}
              </PreviewWrap>
              <CardName>{name}</CardName>
              <Price sale={priceWithDiscount}>{price}&thinsp;₽</Price>
              <PriceWithDiscount>
                {priceWithDiscount}&thinsp;₽
              </PriceWithDiscount>
            </CardInfo>
            <Button onClick={() => handleAddToCart(_id)}>
              <Icon name="buy" color="#fff" />
            </Button>
          </Card>
        );
      })}
    </Wrapper>
  );
};

export default Cards;

export const CardInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;
