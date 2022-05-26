import styled from "styled-components";

export const Wrapper = styled.div`
  height: 200px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  width: 100%;
`;
const Footer = () => {
  return <Wrapper>Graphite ©2022</Wrapper>;
};

export default Footer;
