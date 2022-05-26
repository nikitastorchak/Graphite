import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter, push, routerMiddleware } from "connected-react-router";
import { productsReducer } from "./reducers/productReducer";

type AppAction = ReturnType<typeof store.dispatch>;

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  products: productsReducer,
  router: connectRouter(history),
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export type AppDispatch = ThunkDispatch<RootState, any, AppAction>;
export const useDispatch = () => useReduxDispatch<AppDispatch>();

export default store;
