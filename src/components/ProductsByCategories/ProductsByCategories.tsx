import Cards from "../../common/Cards/Cards";
import { Title } from "../../globalStyles/GlobalStyles";

const ProductsByCategories = ({ productsByCategory }: any) => (
  <>
    {productsByCategory?.length > 0 &&
      productsByCategory.map(
        (item: { name: String; products: any }, index: number) => (
          <div key={`wrapper-${index}`}>
            <Title>{item.name}</Title>
            <Cards products={item.products} />
          </div>
        )
      )}
  </>
);

export default ProductsByCategories;
