import Cards from "../../common/Cards/Cards";
import { getNewProducts } from "../../store/actions/productActions";
import { useEffect, useState } from "react";
import { useDispatch } from "../../store";
import Loading from "../../common/Loading/Loading";
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
