import React from "react";
import { ReactComponent as Plane } from "../../images/Plane.svg";
import { ReactComponent as Fire } from "../../images/Fire.svg";
import { ReactComponent as Crown } from "../../images/Crown.svg";
import { ReactComponent as Briefcase } from "../../images/Briefcase.svg";
import { ReactComponent as Medal } from "../../images/Medal.svg";
import "./Categories.scss";
import styled from "styled-components";

const CategoryTitle = styled.p`
  font-size: 12px;
  color: #fff;
`;
const CategoryWrap = styled.div`
  svg {
    width: 32px;
    fill: #fff;
    height: 32px;
    justify-self: center;
  }
`;
const Wrapper = styled.div`
  display: grid;
  margin-top: 13px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const Categories = () => {
  return (
    <Wrapper>
      <CategoryWrap>
        <Plane />
        <CategoryTitle>Graphite Travel</CategoryTitle>
      </CategoryWrap>
      <CategoryWrap>
        <Fire />
        <CategoryTitle>Акции</CategoryTitle>
      </CategoryWrap>
      <CategoryWrap>
        <Crown />
        <CategoryTitle>Хочу премиум</CategoryTitle>
      </CategoryWrap>
      <CategoryWrap>
        <Briefcase />
        <CategoryTitle>Graphite для бизнеса</CategoryTitle>
      </CategoryWrap>
      <CategoryWrap>
        <Medal />
        <CategoryTitle>Зона лучших цен</CategoryTitle>
      </CategoryWrap>
    </Wrapper>
  );
};

export default Categories;
