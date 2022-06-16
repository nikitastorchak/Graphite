import { FC } from "react";
import Cards from "../../common/Cards/Cards";
import { Title } from "../../globalStyles/globalStyles";
import { Product } from "../../types/products";

interface ProductsByCategoriesProps {
  productsByCategory: Products[];
}
interface Products {
  name: string;
  products: Product[];
}
const ProductsByCategories: FC<ProductsByCategoriesProps> = ({
  productsByCategory,
}) => (
  <>
    {productsByCategory?.length > 0 &&
      productsByCategory.map((item, index: number) => (
        <div key={`wrapper-${index}`}>
          <Title>{item.name}</Title>
          <Cards products={item.products} />
        </div>
      ))}
  </>
);

export default ProductsByCategories;
