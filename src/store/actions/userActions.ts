import { AppThunk } from "../../types/products";

import UserService from "../../services/UserService";

import { UserAction, UserActionsTypes } from "../../types/users";

const setUser = (data: any): UserAction => ({
  type: UserActionsTypes.SET_USER_DATA,
  payload: data,
});

export default class ProductActions {
  static authorization =
    (payload: any): AppThunk =>
    async (dispatch) => {
      try {
        const userData = await UserService.post("authorization", payload);
        dispatch(setUser(userData?.data));
      } catch (e: any) {
        return e.message;
      }
    };
}
