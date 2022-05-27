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

const Cards = ({ products }: any) => (
  <Wrap>
    {products?.map((product: any) => (
      <Card>
        <PreviewWrap>
          <Preview src={product.preview} />
        </PreviewWrap>

        <CardName>{product.name}</CardName>
        <Price>{product.price}&thinsp;₽</Price>
        <Button>
          <Icon name={"buy"} />
        </Button>
      </Card>
    ))}
  </Wrap>
);

export default Cards;
