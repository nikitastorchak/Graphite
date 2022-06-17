import { UserAction, UserActionsTypes, UserReducer } from "../../types/users";

const user: UserReducer = {
  tokens: {},
  userData: {
    _id: "",
    name: "",
    secondName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    role: [""],
  },
};

export const userReducer = (state = user, action: UserAction): UserReducer => {
  switch (action.type) {
    case UserActionsTypes.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload.user,
        tokens: action.payload.tokens,
      };

    default:
      return state;
  }
};
