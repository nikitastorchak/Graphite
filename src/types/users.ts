export enum UserActionsTypes {
  SET_USER_DATA = "SET_USER_DATA",
}

interface SetUserData {
  type: UserActionsTypes.SET_USER_DATA;
  payload: any[];
}

export interface UserReducer {
  userData: any;
  userId: string;
  name: string;
  secondName: string;
  email: string;
  phone: string;
  address: string;
}

export type UserAction = SetUserData;

export interface User {
  userId: string;
  name: string;
  secondName: string;
  email: string;
  phone: string;
  address: string;
}
