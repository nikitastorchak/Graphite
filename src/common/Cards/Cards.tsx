import {
  Button,
  Card,
  CardName,
  Preview,
  PreviewWrap,
  Price,
  Wrap,
} from "./CardsStyles";

const Cards = ({ products }: any) => (
  <Wrap>
    {products?.map((product: any) => (
      <Card>
        <PreviewWrap>
          <Preview src={product.preview} />
        </PreviewWrap>

        <CardName>{product.name}</CardName>
        <Price>{product.price}&thinsp;₽</Price>
        <Button>В корзину</Button>
      </Card>
    ))}
  </Wrap>
);

export default Cards;
