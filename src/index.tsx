import ReactDOM from "react-dom";
import { history } from "./store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import App from "./App";

import store from "./store";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
