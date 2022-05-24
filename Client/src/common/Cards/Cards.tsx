import { useSelector } from "../../store";

import {
  Button,
  Card,
  CardName,
  Preview,
  PreviewWrap,
  Price,
  Wrap,
} from "./CardsStyles";

const Cards = ({ category }: any) => {
  const { products } = useSelector((state) => state.products);

  return (
    <Wrap>
      {true &&
        products?.map((item) => {
          if (category) {
            if (item.category === category) {
              return (
                <Card>
                  <PreviewWrap>
                    <Preview src={item.preview} />
                  </PreviewWrap>

                  <CardName>{item.name}</CardName>
                  <Price>{item.price}&thinsp;₽</Price>
                  <Button>В корзину</Button>
                </Card>
              );
            }
          } else {
            return (
              <Card>
                <PreviewWrap>
                  <Preview src={item.preview} />
                </PreviewWrap>

                <CardName>{item.name}</CardName>
                <Price>{item.price}&thinsp;₽</Price>
                <Button>В корзину</Button>
              </Card>
            );
          }
        })}
    </Wrap>
  );
};

export default Cards;
