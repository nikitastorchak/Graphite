import { FC, useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "../../store";
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
import userActions from "../../store/actions/userActions";
import ProductActions from "../../store/actions/productActions";

interface CardsProps {
  products: Product[];
}

const Cards: FC<CardsProps> = ({ products }) => {
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.user);

  const changeLocation = (url: string) => {
    dispatch(push(url));
  };

  const handleAddToCart = async (id: string) => {
    if (userData._id) {
      const cart = JSON.parse(Cookies.get("cart") || "[]");
      cart === [] && cart.push({ productId: id, count: 1 });
      cart.map((item: any) => {
        if (item.productId === id) {
          item.count++;
        } else {
          cart.push({ productId: id, count: 1 });
        }
      });
      Cookies.set("cart", JSON.stringify(cart), { expires: 14 });
      await dispatch(
        ProductActions.addProductToCart({
          userId: userData._id,
          products: [{ productId: id, count: 1 }],
        })
      );
    } else {
      const cart = JSON.parse(Cookies.get("cart") || "[]");
      cart === [] && cart.push({ productId: id, count: 1 });
      cart.map((item: any) => {
        if (item.productId === id) {
          item.count++;
        } else {
          cart.push({ productId: id, count: 1 });
        }
      });
      Cookies.set("cart", JSON.stringify(cart), { expires: 14 });
    }
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
