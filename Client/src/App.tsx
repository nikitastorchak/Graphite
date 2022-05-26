import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import PageNotFound from "./pages/NotFound/PageNotFound";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";

import "./App.css";
import Catalog from "./pages/Catalog/Catalog";

const Layout = styled.div`
  text-align: center;
  border-radius: 0 0 7px 7px;
  background-color: #15141c;
  min-height: 100%;
`;
const Wrapper = styled.div`
  height: 100vh;
`;

const App = () => (
  <Wrapper>
    <Navbar />
    <Layout>
      <Search />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/cart" component={Cart} />
        <Route path="/favorite" component={PageNotFound} />
        <Route path="/profile" component={PageNotFound} />
        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Layout>
    <Footer />
  </Wrapper>
);

export default App;
