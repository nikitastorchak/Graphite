import { useDispatch } from "../../store";
import { useEffect, useState } from "react";
import { push } from "connected-react-router";

const Profile = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const dispatch = useDispatch();
  const changeLocation = (url: string) => {
    dispatch(push(url));
  };
  useEffect(() => {
    localStorage.getItem("accessToken") ? setIsAuth(true) : setIsAuth(false);
  }, []);
  return <>{isAuth ? <>ddd</> : changeLocation("/authorization")}</>;
};

export default Profile;
