import {
  AppointsActionsTypes,
  List,
  AppThunk,
  AppointsAction,
  GetCartProps,
} from "../../types/products";

import UserService from "../../services/UserService";

import {
  NewProducts,
  ProductsByCategories,
} from "../../services/ProductsHandlers";
import { uniq } from "lodash";

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
const setCart = (data: string[]): AppointsAction => ({
  type: AppointsActionsTypes.SET_CART,
  payload: data,
});
const toggleLoader = (data: boolean): AppointsAction => ({
  type: AppointsActionsTypes.TOGGLE_LOADER,
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

  static addProductToCart =
    (payload: any): AppThunk =>
    async (dispatch) => {
      try {
        await UserService.patch("addProductsToCart", payload);
      } catch (e: any) {
        return e.message;
      }
    };

  static getCart =
    (payload: GetCartProps): AppThunk =>
    async (dispatch) => {
      const { userId } = payload;
      try {
        await UserService.get("showUserCart", {
          userId,
        });
      } catch (e: any) {
        return e.message;
      }
    };

  // static updateCart =
  //   (payload: GetCartProps): AppThunk =>
  //   async (dispatch) => {
  //     const { userId, localCart } = payload;
  //     try {
  //       // const response = await UserService.get("showUserCart", { userId });
  //       // const userCart = response.data.length > 0 ? response.data[0].cart : [];
  //       // const allCarts: string[] = uniq([...localCart, ...userCart]);
  //       await UserService.patch("updateCart", {
  //         userId: payload.userId,
  //         products: localCart,
  //       });
  //
  //       // dispatch(setCart(allCarts));
  //     } catch (e: any) {
  //       return e.message;
  //     }
  //   };

  static getLocalCart =
    (payload: string[]): AppThunk =>
    async (dispatch) => {
      try {
        dispatch(setCart(payload));
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
  static toggleLoader =
    (payload: boolean): AppThunk =>
    async (dispatch) => {
      try {
        dispatch(toggleLoader(payload));
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
