import { Switch, Route, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { FC, useCallback, useEffect } from "react";
import theme from "./theme";

import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import PageNotFound from "./pages/NotFound/PageNotFound";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";
import Profile from "./pages/Profile/Profile";
import Registration from "./pages/Authorization/Registration";
import Authorization from "./pages/Authorization/Authorization";

import "./App.css";
import userActions from "./store/actions/userActions";
import { useDispatch, useSelector } from "./store";
import { push } from "connected-react-router";
import ProductActions from "./store/actions/productActions";

const App: FC = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.products);

  const checkAuthHandler = useCallback(async () => {
    const isToken = localStorage.getItem("accessToken");
    if (isToken) {
      await dispatch(ProductActions.toggleLoader(true));
      await dispatch(userActions.getUser());
    }
  }, []);
  useEffect(() => {
    checkAuthHandler();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <Wrapper>
          <Navbar />
          <Layout>
            <Search />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/catalog" component={Catalog} />
              <Route path="/cart" component={Cart} />
              <Route path="/favorite" component={PageNotFound} />
              <Route path="/profile" component={Profile} />
              <Route exact path="/authorization" component={Authorization} />
              <Route exact path="/registration" component={Registration} />
              <Route path="/404" component={PageNotFound} />
              <Route exact path="/product/:productId" component={Product} />
              <Redirect to="/404" />
            </Switch>
          </Layout>
          <Footer />
        </Wrapper>
      )}
    </ThemeProvider>
  );
};

export default App;

const Layout = styled.div`
  text-align: center;
  border-radius: 0 0 7px 7px;
  background-color: ${(props) => props.theme.mainColor};
  min-height: 100%;
`;
const Wrapper = styled.div`
  height: 100vh;
`;
