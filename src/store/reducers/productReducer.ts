import {
  AppointsAction,
  AppointsActionsTypes,
  AppointsReducer,
} from "../../types/products";

const products: AppointsReducer = {
  newProducts: [],
  mainResources: [],
  products: [],
  categories: [],
  selectedCategory: {},
};

export const productsReducer = (
  state = products,
  action: AppointsAction
): AppointsReducer => {
  switch (action.type) {
    case AppointsActionsTypes.SET_MAIN_RESOURCES:
      return {
        ...state,
        newProducts: action.payload[0],
        mainResources: action.payload[1],
      };
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
