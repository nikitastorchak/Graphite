import { push } from "connected-react-router";
import { useDispatch } from "../../store";

import Icon from "../../common/Icon/Icon";

import { Block, NavItem, NavItemWrapper, Wrapper } from "./NavbarStyles";
import { navItems, navItemsType } from "../../constants/IconsProps";

const Navbar = () => {
  const dispatch = useDispatch();
  const changeLocation = (url: string) => {
    dispatch(push(`/${url}`));
  };
  return (
    <Wrapper>
      {navItems?.map((item: navItemsType) => (
        <Block onClick={() => changeLocation(`${item.location}`)}>
          <Icon name={item.name} size={24} color="#828bac" />
          <NavItemWrapper>
            <NavItem>{item.text}</NavItem>
          </NavItemWrapper>
        </Block>
      ))}
    </Wrapper>
  );
};

export default Navbar;
