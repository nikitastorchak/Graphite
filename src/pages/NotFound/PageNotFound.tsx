import { useDispatch } from "../../store";
import { push } from "connected-react-router";
import { BackLink, Status, Title, Wrapper } from "./PageNotFoundStyles";

const PageNotFound = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Title>Страница в разработке</Title>
      <Status>404</Status>
      <BackLink onClick={() => dispatch(push("/"))}>Назад на главную</BackLink>
    </Wrapper>
  );
};

export default PageNotFound;
