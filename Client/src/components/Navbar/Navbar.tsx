import { push } from "connected-react-router";
import { useDispatch } from "../../store";

import Icon from "../../common/Icon/Icon";
import { Block, NavItem, NavItemWrapper, Wrapper } from "./NavbarStyles";

const navItems = [
  {
    name: "home",
    size: "24",
    location: "",
    text: "Главная",
  },
  {
    name: "find",
    size: "24",
    location: "catalog",
    text: "Каталог",
  },
  {
    name: "cart",
    size: "24",
    location: "cart",
    text: "Корзина",
  },
  {
    name: "like",
    size: "24",
    location: "favorite",
    text: "Избранное",
  },
  {
    name: "user",
    size: "24",
    location: "profile",
    text: "Мой Graphite",
  },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const changeLocation = (url: string) => {
    dispatch(push(`/${url}`));
  };
  return (
    <Wrapper>
      {navItems?.map((item) => (
        <Block onClick={() => changeLocation(`${item.location}`)}>
          <Icon name={item.name} size={item.size} color="#828bac" />
          <NavItemWrapper>
            <NavItem>{item.text}</NavItem>
          </NavItemWrapper>
        </Block>
      ))}
    </Wrapper>
  );
};

export default Navbar;
