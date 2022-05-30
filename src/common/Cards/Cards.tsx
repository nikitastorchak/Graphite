import { FC } from "react";
import { Product } from "../../services/ProductsHandlers";

import {
  Button,
  Card,
  CardName,
  Preview,
  PreviewWrap,
  Price,
  Wrap,
} from "./CardsStyles";
import Icon from "../Icon/Icon";

interface CardsProps {
  products: Product[];
}

const Cards: FC<CardsProps> = ({ products }) => {
  // const addToCart = (id: string) => {
  //   const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  //   cart.push(id);
  //   const uniqueCart = uniq(cart);
  //   localStorage.setItem("cart", JSON.stringify(uniqueCart));
  // };
  //TODO add to cart

  return (
    <Wrap>
      {products?.map((product: any, index: number) => (
        <Card key={`card-${index}`}>
          <PreviewWrap>
            {product.preview ? (
              <Preview
                src={product.preview}
                alt="Товар еще не имеет картинки :("
              />
            ) : (
              <Icon name="photo" size={50} color="#828bac" />
            )}
          </PreviewWrap>
          <CardName>{product.name}</CardName>
          <Price>{product.price}&thinsp;₽</Price>
          <Button onClick={() => {}}>
            <Icon name="buy" color="#828bac" />
          </Button>
        </Card>
      ))}
    </Wrap>
  );
};

export default Cards;
