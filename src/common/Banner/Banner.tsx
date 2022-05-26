import styled from "styled-components";

const Wrapper = styled.div`
  background: ${(props) => props.theme.mainColor};
  width: 100%;
  height: 130px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  padding: 20px 0;
  border-radius: 8px;
`;
const Banner = () => <Wrapper></Wrapper>;

export default Banner;
