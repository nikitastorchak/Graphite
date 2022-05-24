import {
  Button,
  Card,
  CardName,
  CategoryName,
  Preview,
  PreviewWrap,
  Price,
  Wrap,
} from "./ProductsByCategoriesStyles";

const ProductsByCategories = ({ productsByCategory }: any) => (
  <>
    {productsByCategory?.length > 0 &&
      productsByCategory.map((item: { name: String; products: any }) => (
        <>
          <CategoryName>{item.name}</CategoryName>
          <Wrap>
            {item.products?.map((product: any) => (
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
        </>
      ))}
  </>
);

export default ProductsByCategories;
