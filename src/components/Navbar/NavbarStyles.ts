import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  height: 70px;
  overflow: hidden;
  z-index: 1;
  border-top: 4px solid #eef0f7;
  background-color: ${(props) => props.theme.white};
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-radius: 7px 7px 0 0;
`;
export const Block = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const NavItemWrapper = styled.div`
  height: 25px;
  width: 100%;
`;
export const NavItem = styled.p`
  margin: 5px;
  text-align: center;
  font-family: "Montserrat Alternates", sans-serif;
  margin-top: 10px;
  color: ${(props) => props.theme.primaryLightLink};
  font-size: 10px;
`;
