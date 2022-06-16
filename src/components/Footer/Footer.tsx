import styled from "styled-components";

export const Wrapper = styled.div`
  height: 200px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-top: 20px;
`;
const Footer = () => <Wrapper>Graphite ©2022</Wrapper>;

export default Footer;
