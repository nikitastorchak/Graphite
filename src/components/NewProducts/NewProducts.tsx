import Cards from "../../common/Cards/Cards";

import { Title } from "../../globalStyles/GlobalStyles";

const NewProducts = ({ newProducts }: any) => {
  return (
    <>
      <Title>Новинки</Title>
      <Cards products={newProducts} />
    </>
  );
};

export default NewProducts;
