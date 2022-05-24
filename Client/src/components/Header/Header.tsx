import styled from "styled-components";
import { push } from "connected-react-router";

import { useDispatch } from "../../store";

import { ReactComponent as Catalog } from "../../images/FindIcon.svg";
import { ReactComponent as Home } from "../../images/Home.svg";
import { ReactComponent as Cart } from "../../images/Cart.svg";
import { ReactComponent as Favorite } from "../../images/Like.svg";
import { ReactComponent as User } from "../../images/User.svg";

import { SECOND_COLOR } from "../../constants/Colors";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  height: 70px;
  overflow: hidden;
  z-index: 1;
  background-color: #262434;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-radius: 7px 7px 0 0;
`;
const Block = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IconWrapper = styled.div`
  height: 25px;
  width: 25px;
  fill: ${SECOND_COLOR};
`;
const IconText = styled.p`
  margin: 0;
  font-family: "Montserrat Alternates", sans-serif;
  margin-top: 10px;
  color: #ffffff;
  font-size: 10px;
`;
//TODO dispatch svgs
const Header = () => {
  const dispatch = useDispatch();
  const changeLocation = (url: string) => {
    dispatch(push(`/${url}`));
  };
  return (
    <Wrapper>
      <Block onClick={() => changeLocation("")}>
        <Home />
        <IconWrapper>
          <IconText>Главная</IconText>
        </IconWrapper>
      </Block>
      <Block onClick={() => changeLocation("catalog")}>
        <Catalog />
        <IconWrapper>
          <IconText>Каталог</IconText>
        </IconWrapper>
      </Block>
      <Block onClick={() => changeLocation("cart")}>
        <Cart />
        <IconWrapper>
          <IconText>Корзина</IconText>
        </IconWrapper>
      </Block>
      <Block onClick={() => changeLocation("favorite")}>
        <Favorite />
        <IconWrapper>
          <IconText>Избранное</IconText>
        </IconWrapper>
      </Block>
      <Block onClick={() => changeLocation("profile")}>
        <User />
        <IconWrapper>
          <IconText>Мой Graphite</IconText>
        </IconWrapper>
      </Block>
    </Wrapper>
  );
};

export default Header;
