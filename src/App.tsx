import { Switch, Route, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { FC } from "react";
import theme from "./theme";

import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import PageNotFound from "./pages/NotFound/PageNotFound";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import Catalog from "./pages/Catalog/Catalog";

import "./App.css";
import Product from "./pages/Product/Product";
import Profile from "./pages/Profile/Profile";
import Registration from "./pages/Authorization/Registration";
import Authorization from "./pages/Authorization/Authorization";

const App: FC = () => (
  <ThemeProvider theme={theme}>
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
          <Route path="/registration" component={Registration} />
          <Route path="/authorization" component={Authorization} />
          <Route path="/404" component={PageNotFound} />
          <Route exact path="/product/:productId" component={Product} />
          <Redirect to="/404" />
        </Switch>
      </Layout>
      <Footer />
    </Wrapper>
  </ThemeProvider>
);

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
