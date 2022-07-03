import styled from "styled-components";

const Wrapper = styled.div`
  //background: ;
  background-color: ${(props) => props.theme.primary};
  //background: rgb(101, 67, 231);
  //background: linear-gradient(
  //  90deg,
  //  rgba(101, 67, 231, 1) 0%,
  //  rgba(68, 107, 255, 1) 100%
  //);
  width: 100%;
  height: 130px;

  color: #fff;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  padding: 20px 0;
  border-radius: 8px;
`;
const Banner = () => (
  <Wrapper>
    <h1>Sales</h1>
  </Wrapper>
);

export default Banner;
