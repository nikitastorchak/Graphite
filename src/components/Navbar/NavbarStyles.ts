import styled from "styled-components";
import { SECOND_COLOR } from "../../constants/Colors";

export const Wrapper = styled.div`
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
export const Block = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const NavItemWrapper = styled.div`
  height: 25px;
  width: 100%;
  fill: ${SECOND_COLOR};
`;
export const NavItem = styled.p`
  margin: 5px;
  text-align: center;
  font-family: "Montserrat Alternates", sans-serif;
  margin-top: 10px;
  color: #828bac;
  font-size: 10px;
`;
