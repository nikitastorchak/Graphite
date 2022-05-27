import Cards from "../../common/Cards/Cards";
import { Title } from "../../globalStyles/GlobalStyles";

const ProductsByCategories = ({ productsByCategory }: any) => (
  <>
    {productsByCategory?.length > 0 &&
      productsByCategory.map((item: { name: String; products: any }) => (
        <>
          <Title>{item.name}</Title>
          <Cards products={item.products} />
        </>
      ))}
  </>
);

export default ProductsByCategories;
