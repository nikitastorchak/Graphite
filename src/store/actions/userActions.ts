import { AppThunk } from "../../types/products";

import UserService from "../../services/UserService";

import { UserAction, UserActionsTypes } from "../../types/users";

const setUser = (data: any): UserAction => ({
  type: UserActionsTypes.SET_USER_DATA,
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
  static getUserData =
    (payload: any): AppThunk =>
    async (dispatch) => {
      try {
        const userData = await UserService.post("registration");
        dispatch(setUser(userData?.data));
      } catch (e: any) {
        return e.message;
      }
    };
}
