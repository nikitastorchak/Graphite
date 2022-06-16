import { UserAction, UserActionsTypes, UserReducer } from "../../types/users";

const user: UserReducer = {
  userData: {},
  userId: "",
  name: "",
  secondName: "",
  email: "",
  phone: "",
  address: "",
};

export const productsReducer = (
  state = user,
  action: UserAction
): UserReducer => {
  switch (action.type) {
    case UserActionsTypes.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};
