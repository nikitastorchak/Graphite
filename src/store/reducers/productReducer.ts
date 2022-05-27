import {
  AppointsAction,
  AppointsActionsTypes,
  AppointsReducer,
} from "../../types/products";

const products: AppointsReducer = {
  products: [],
  categories: [],
  selectedCategory: {},
};

export const productsReducer = (
  state = products,
  action: AppointsAction
): AppointsReducer => {
  switch (action.type) {
    case AppointsActionsTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case AppointsActionsTypes.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case AppointsActionsTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
