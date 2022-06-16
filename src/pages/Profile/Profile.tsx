import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../store";
import ProductActions from "../../store/actions/productActions";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../common/Button/Button";
import Icon from "../../common/Icon/Icon";
import { push } from "connected-react-router";

const Price = styled.p`
  font-size: 20px;
`;
const Name = styled.p`
  font-size: 25px;
`;
const Description = styled.p`
  font-size: 15px;
`;

const Profile = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const dispatch = useDispatch();
  const changeLocation = (url: string) => {
    dispatch(push(url));
  };
  useEffect(() => {
    localStorage.getItem("accessToken") ? setIsAuth(true) : setIsAuth(false);
  }, []);
  return <>{isAuth ? <>ddd</> : changeLocation("/registration")}</>;
};

export default Profile;
