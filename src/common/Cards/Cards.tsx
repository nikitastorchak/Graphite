import uniq from "lodash/uniq";
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

const Cards = ({ products }: CardsProps) => {
  const addToCart = (id: string) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(id);
    const uniqueCart = uniq(cart);
    localStorage.setItem("cart", JSON.stringify(uniqueCart));
  };

  return (
    <Wrap>
      {products?.map((product: any, index: number) => (
        <Card key={`card-${index}`}>
          <PreviewWrap>
            <Preview src={product.preview} />
          </PreviewWrap>
          <CardName>{product.name}</CardName>
          <Price>{product.price}&thinsp;₽</Price>
          <Button onClick={() => addToCart(product._id)}>
            <Icon name="buy" color="#828bac" />
          </Button>
        </Card>
      ))}
    </Wrap>
  );
};

export default Cards;
