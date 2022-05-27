import Cards from "../../common/Cards/Cards";

import { Title } from "../../globalStyles/GlobalStyles";
import { Product } from "../../services/ProductsHandlers";
import { FC } from "react";

interface NewProductsProps {
  newProducts: Product[];
}

const NewProducts: FC<NewProductsProps> = ({ newProducts }) => (
  <>
    <Title>Новинки</Title>
    <Cards products={newProducts} />
  </>
);

export default NewProducts;
