import {
  AppointsActionsTypes,
  List,
  AppThunk,
  AppointsAction,
} from "../../types/products";

import UserService from "../../services/UserService";
import { push } from "connected-react-router";

const setCategories = (data: List[]): AppointsAction => ({
  type: AppointsActionsTypes.SET_CATEGORIES,
  payload: data,
});
const setProducts = (data: any): AppointsAction => ({
  type: AppointsActionsTypes.SET_PRODUCTS,
  payload: data,
});
const setSelectedCategory = (data: any): AppointsAction => ({
  type: AppointsActionsTypes.SET_SELECTED_CATEGORY,
  payload: data,
});

export const getCategoriesAction = (): AppThunk => async (dispatch) => {
  try {
    const response = await UserService.get("showCategories");
    dispatch(setCategories(response.data));
  } catch (e: any) {
    return e.message;
  }
};

export const setSelectedCategoryAction =
  (payload: any): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setSelectedCategory(payload));
    } catch (e: any) {
      return e.message;
    }
  };

export const getProductsAction = (): AppThunk => async (dispatch) => {
  try {
    const response = await UserService.get("showProducts");
    dispatch(setProducts(response?.data));
  } catch (e: any) {
    return e.message;
  }
};

export const getResourcesAction = (): AppThunk => async (dispatch) => {
  try {
    const products = await UserService.get("showProducts");
    dispatch(setProducts(products?.data));
    const categories = await UserService.get("showCategories");
    dispatch(setCategories(categories.data));
  } catch (e: any) {
    return e.message;
  }
};

export const getProductsForMainPage = (): AppThunk => async () => {
  try {
    const response = await UserService.get("showProductsMainPage");
    return response;
  } catch (e: any) {
    return e.message;
  }
};

export const searchProducts =
  (payload: any): AppThunk =>
  async (dispatch) => {
    try {
      const response = await UserService.get("SearchProducts", payload);
      return response.data;
    } catch (e: any) {
      return e.message;
    }
  };

//Todo refactor all actions

// export default ProductActions = {
//   searchProducts,
// }
