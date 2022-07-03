export enum UserActionsTypes {
  SET_USER_DATA = "SET_USER_DATA",
}

interface SetUserData {
  type: UserActionsTypes.SET_USER_DATA;
  payload: UserData;
}

interface UserData {
  user: User;
  tokens: Tokens;
}
interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface UserReducer {
  tokens: Tokens | {};
  userData: User;
}

export type UserAction = SetUserData;

export interface User {
  _id: string;
  name: string;
  secondName: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  role: string[];
}
