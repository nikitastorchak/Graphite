import {
  AppointsActionsTypes,
  List,
  AppThunk,
  AppointsAction,
} from "../../types/products";

import UserService from "../../services/UserService";

import {
  NewProducts,
  ProductsByCategories,
} from "../../services/ProductsHandlers";

const setCategories = (data: List[]): AppointsAction => ({
  type: AppointsActionsTypes.SET_CATEGORIES,
  payload: data,
});
const setProducts = (data: any): AppointsAction => ({
  type: AppointsActionsTypes.SET_PRODUCTS,
  payload: data,
});
const setProduct = (data: any): AppointsAction => ({
  type: AppointsActionsTypes.SET_PRODUCT,
  payload: data,
});
const setMainResources = (data: any): AppointsAction => ({
  type: AppointsActionsTypes.SET_MAIN_RESOURCES,
  payload: data,
});
const setSelectedCategory = (data: any): AppointsAction => ({
  type: AppointsActionsTypes.SET_SELECTED_CATEGORY,
  payload: data,
});
interface ProductActionsProps {
  getCategoriesAction: () => void;
  getProductsAction: () => void;
  getMainResources: () => void;
  getResourcesForMainPage: () => void;
  searchProducts: (payload: any) => () => any;
}
export default class ProductActions {
  static getCategoriesAction = (): AppThunk => async (dispatch) => {
    try {
      const response = await UserService.get("showCategories");
      dispatch(setCategories(response.data));
    } catch (e: any) {
      return e.message;
    }
  };

  static getProductsAction = (): AppThunk => async (dispatch) => {
    try {
      const response = await UserService.get("showProductById");
      dispatch(setProducts(response?.data));
    } catch (e: any) {
      return e.message;
    }
  };

  static getProduct =
    (payload: any): AppThunk =>
    async (dispatch) => {
      try {
        const response = await UserService.get("showProductById", payload);
        dispatch(setProduct(response?.data));
      } catch (e: any) {
        return e.message;
      }
    };

  static getMainResources = (): AppThunk => async (dispatch) => {
    try {
      const newProducts: NewProducts = await UserService.get("showNewProducts");
      const productsByCategories: ProductsByCategories = await UserService.get(
        "showProductsMainPage"
      );
      dispatch(setMainResources([newProducts.data, productsByCategories.data]));
    } catch (e: any) {
      return e.message;
    }
  };

  static getResourcesForMainPage = (): AppThunk => async (dispatch) => {
    try {
      const products = await UserService.get("showProducts");
      dispatch(setProducts(products?.data));
      const categories = await UserService.get("showCategories");
      dispatch(setCategories(categories.data));
    } catch (e: any) {
      return e.message;
    }
  };

  static searchProducts =
    (payload: any): AppThunk =>
    async () => {
      try {
        const response = await UserService.get("SearchProducts", payload);
        return response.data;
      } catch (e: any) {
        return e.message;
      }
    };
}
