import styled from "styled-components";
import { Title, Wrapper } from "../../globalStyles/globalStyles";
import { useSelector } from "../../store";

const Catalog = () => {
  const { mainResources } = useSelector((state) => state.products);
  return (
    <Wrapper>
      {mainResources.map((item) => (
        <Category>
          <Title>{item.name}</Title>
        </Category>
      ))}
    </Wrapper>
  );
};

export default Catalog;

const Category = styled.a`
  display: flex;
  margin: 10px 0;
  padding-left: 10px;
  border-left: 4px solid ${(props) => props.theme.primary};
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.primary};
    transition: 0.3s;
    border-radius: 0 10px 10px 0;
    h3${Title} {
      color: ${(props) => props.theme.secondary};
    }
  }
`;
