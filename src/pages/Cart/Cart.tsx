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

const Title = styled.h2`
  font-style: bolder;
  margin: 0;
`;

const Cart = () => {
  const checkAuth = () => localStorage.getItem("tokens");
  const dispatch = useDispatch();
  return (
    <>{checkAuth() ? <Title>Корзина</Title> : <Title>Корзина пуста</Title>}</>
  );
};

export default Cart;
