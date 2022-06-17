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
        localStorage.setItem("accessToken", userData.data.tokens.accessToken);
        localStorage.setItem("refreshToken", userData.data.tokens.refreshToken);
      } catch (e: any) {
        return e.message;
      }
    };

  static registration =
    (payload: any): AppThunk =>
    async (dispatch) => {
      try {
        const userData = await UserService.post("registration", payload);
        dispatch(setUser(userData?.data));
        localStorage.setItem("accessToken", userData.data.tokens.accessToken);
        localStorage.setItem("refreshToken", userData.data.tokens.refreshToken);
      } catch (e: any) {
        return e.message;
      }
    };

  static getUser = (): AppThunk => async (dispatch) => {
    try {
      console.log("fdfd");
      const userData = await UserService.post("getUser");
      dispatch(setUser(userData?.data));
    } catch (e: any) {
      return e.message;
    }
  };
}
