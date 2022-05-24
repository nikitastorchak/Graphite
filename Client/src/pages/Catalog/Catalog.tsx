import Search from "../../components/Search/Search";
import React, { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";
import CardsWrap from "../../common/Cards/Cards";
import { useDispatch } from "../../store";
import {
  getCategoriesAction,
  getProductsAction,
} from "../../store/actions/productActions";
import styled from "styled-components";
import CatalogModal from "../../components/Modals/CatalogModal/CatalogModal";
import SearchModal from "../../components/Modals/SearchModal/SearchModal";
import ProductsByCategories from "../../components/ProductsByCategories/ProductsByCategories";
import BannerWithButton from "../../common/Banner/Banner";
import { push } from "connected-react-router";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #262434;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.h3`
  width: fit-content;
  max-width: 80%;
  position: absolute;
  top: 20px;
  justify-self: flex-start;
  font-family: "Montserrat Alternates", sans-serif;
  text-align: center;

  color: #fff;
`;
const Title = styled.h2`
  width: fit-content;
  max-width: 80%;
  font-family: "Montserrat", sans-serif;
  text-align: center;

  color: #fff;
`;
const Status = styled.h1`
  width: fit-content;
  font-size: 70px;
  color: #ff6767;
  margin: 0;
`;
const BackLink = styled.a`
  padding: 15px;
  margin-top: 50px;
  color: #fff;
  transition: 0.2s;
  :hover {
    transform: scale(1.1);
    transition: 0.2s;
    color: #bbb2ff;
  }
`;

const PageNotFound = () => {
  const dispatch = useDispatch();
  return <Wrapper></Wrapper>;
};

export default PageNotFound;
