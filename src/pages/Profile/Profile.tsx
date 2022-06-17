import { useDispatch, useSelector } from "../../store";
import { useEffect, useState } from "react";
import styled from "styled-components";
import userActions from "../../store/actions/userActions";
import { push } from "connected-react-router";

//TODO fix auth checker for all pages
const Profile = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const checkAuthHandler = async () => {
    const isToken = localStorage.getItem("accessToken");
    isToken
      ? await dispatch(userActions.getUser())
      : dispatch(push("authorization"));
  };
  useEffect(() => {
    checkAuthHandler();
  }, []);
  return (
    <>
      {userData._id ? (
        <>
          <Title>
            {userData.secondName} {userData.name}
          </Title>
        </>
      ) : (
        <p>Авторизируйтесь</p>
      )}
    </>
  );
};

export default Profile;

const Title = styled.h3`
  color: #404040;
`;
