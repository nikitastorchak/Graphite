import { FC, useEffect, useState } from "react";
import { Product } from "../../services/ProductsHandlers";

import {
  Card,
  CardName,
  Preview,
  PreviewWrap,
  Price,
  PriceWithDiscount,
  Wrapper,
} from "./CardsStyles";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { uniq } from "lodash";
import styled from "styled-components";
import { useDispatch } from "../../store";
import { push } from "connected-react-router";

interface CardsProps {
  products: Product[];
}

export const CardInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;

const Cards: FC<CardsProps> = ({ products }) => {
  //TODO add to cart

  const dispatch = useDispatch();
  const changeLocation = (url: string) => {
    dispatch(push(url));
  };

  return (
    <Wrapper>
      {products?.map((product: any, index: number) => (
        <Card key={`card-${index}`}>
          <CardInfo onClick={() => changeLocation(`/product/${product._id}`)}>
            <PreviewWrap>
              {product.preview ? (
                <Preview
                  src={`http://192.168.2.55:8000/media/${product.preview}`}
                  alt="Товар еще не имеет картинки :("
                />
              ) : (
                <Icon name="photo" size={40} color="#fff" />
              )}
            </PreviewWrap>
            <CardName>{product.name}</CardName>
            <Price sale={product.priceWithDiscount}>
              {product.price}&thinsp;₽
            </Price>
            <PriceWithDiscount>
              {product.priceWithDiscount}&thinsp;₽
            </PriceWithDiscount>
          </CardInfo>
          <Button>
            <Icon name="buy" color="#fff" />
          </Button>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Cards;
